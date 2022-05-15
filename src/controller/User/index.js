const __UserModel = require("./../../models/user");

const bcrypt = require("bcrypt");

const cloudinary = require("cloudinary").v2;

const GenerateToken = require("../../utils/generateToken");

const GenerateCode = require("../../utils/generateVerificationCode");

const sendMail = require("../../utils/emailUtils/email.service");
var generateRefCode = require("shortid");
const WelcomeTemplate = require("../../utils/emailTemplete/email")
module.exports = class UserController {
  async userSignup(
    req,
    fullName,
    email,
    password,
    gender,
    phone,
    referal = ""
  ) {
    try {
      let alreadyUser = await __UserModel.findOne({ email });
      let code = GenerateCode();
      if (!alreadyUser) {
        let newUser = await __UserModel.create({
          fullName,
          email,
          password,
          gender,
          phone,
          verificationCode: code,
          referalCode: generateRefCode(),
        });
        if (referal !== "") {
          await __UserModel.findOneAndUpdate(
            { referalCode: referal },
            { $push: { referals: newUser._id } }
          );
        }
        let mailPayLoad = {
          fullName,
          message : "welcome to Intriobasket, a market place where rendering quality service to our customers is  our pirority",
          verificationLink: `${req.headers.origin}/verify.html?code=${code}&id=${newUser._id}`,
          actionText: "Click To Verify Account",
        }
        await sendMail({
          email: email,
          subject: "WELCOME",
          copy: ["delivery@intriobasket.ng","logistics@intriobasket.ng","accounts@intriobasket.ng","admin@intriobasket.ng"],
          html:WelcomeTemplate(mailPayLoad.fullName,mailPayLoad.message,mailPayLoad.verificationLink,mailPayLoad.actionText)
      })
        // await new EmailUtils("Email Service").mailSend(
        //   "Welcome",
        //   {
        //     fullName: fullName,
        //     message: `Welcome to IntrioBasket shopping store , where customer satisfacton is our priority`,
        //     verificationLink: `${req.headers.origin}/verify.html?code=${code}&id=${newUser._id}`,
        //     actionText: "Click To Verify Account",
        //   },
        //   email,
        //   "WELCOME",
        //   process.env.MAIL_EMAIL
        // );
        return "user Account created sucessfully";
      }
      return `user with this email ${email} already Exist`;
    } catch (error) {
      return error.message;
    }
  }

  async userLogin(email, password) {
    let founduser = await __UserModel.findOne({ email });
    if (!founduser) {
      return "user not found";
    }
    let data = { ...founduser._doc, password: undefined };

    const isPassword = await bcrypt.compare(password, founduser.password);

    if (!isPassword) {
      return "incorrect user password";
    }

    return {
      token: await GenerateToken(founduser),
      user: data,
    };
  }
  async forgetpassword(email, req) {
    let founduser = await __UserModel.findOne({ email });

    if (!founduser) {
      return "Email address does not exist with Intriobasket";
    }
    const code = GenerateCode(); /*Generate verification code*/
    await __UserModel.findOneAndUpdate(
      /*storing verificationCode to user account for validation */
      { email },
      { resetPasswordCode: code },
      { new: true }
    );
    /*
    send password reset code to customer mail
    */
    await new EmailUtils("Email Service").mailSend(
      "forgotPassword",
      {
        fullName: founduser.username,
        message: "Welcome. Your password reset code is below.",
        verificationLink: `${req.headers.origin}/verify.html?=${code}`,
        actionText: code,
      },
      founduser.email,
      "FORGOT PASSWORD",
      process.env.MAIL_EMAIL
    );

    return {
      message:
        "An email with your reset password code has been sent to your email",
      token: await GenerateToken(founduser),
    };
  }
  // verify code sent to user email for forget password flow.
  async verifyforgetpasswordcode(req, code) {
    if (!req.user) {
      return "please log in to continue";
    }
    const { _id } = req.user;
    let foundUser = await __UserModel.findOne({ _id });
    if (!foundUser) {
      return "unknown user";
    }
    let foundUserCode = await __UserModel.findOne({
      resetPasswordCode: code,
      _id,
    });
    if (!foundUserCode) {
      return "incorrect verification Code";
    }
    foundUser.resetPasswordCode = undefined;
    foundUser.save();
    return "code Verified";
  }

  async resendPasswordResetcode(req) {
    if (!req.user) {
      return "please log in to continue";
    }
    const { _id } = req.user;
    let foundUser = await __UserModel.findById(_id);

    if (!foundUser) {
      return "user not found";
    }

    let code = foundUser.resetPasswordCode;

    await new EmailUtils("Email Service").mailSend(
      "forgotPassword",
      {
        fullName: foundUser.username,
        message: "Welcome. Your password reset code is below.",
        verificationLink: `${req.headers.origin}/verify.html?=${code}`,
        // actionText: code,
      },
      foundUser.email,
      "FORGOT PASSWORD",
      process.env.MAIL_EMAIL
    );

    return {
      message:
        "An email with your reset password code has been sent to your email",
      token: await GenerateToken(foundUser),
    };
  }
  // user set new password when forgotten password
  async resetPassword(req, newPassword) {
    if (!req.user) {
      return "please log in to continue";
    }
    const { _id } = req.user;
    let foundUser = await __UserModel.findOne({ _id });
    if (!foundUser) {
      return "unknown user";
    }
    foundUser.password = newPassword;
    await foundUser.save();

    return "sucessfully changed password";
  }

  async updateUserProfile(req) {
    try {
      if (!req.user) {
        return "please log in to continue";
      }
      const { _id } = req.user;
      let avater = null;

      let foundUser = await __UserModel.findById(_id);

      if (!foundUser) {
        return "user not found";
      }
      if (req.body.avater) {
        cloudinary.config({
          cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET,
        });
        await cloudinary.uploader.upload(
          req.body.avater,
          {
            width: 512,
            height: 512,
            crop: "scale",
            allowed_formats: ["jpg", "png", "jpeg", "svg", "bmp"],
            public_id: "",
            folder: "intriobasket-userProfile",
          },
          async function (error, result) {
            if (error) {
              console.log(error)
              return error.message;
            }
            avater = result.secure_url;
          }
        );
      }

      let newDetails = await __UserModel.findOneAndUpdate(
        { _id },
        {
          avater: avater || foundUser.avater,
          email: req.body.email || foundUser.email,
          fullName: req.body.fullName || foundUser.fullName,
          phone: req.body.phone || foundUser.phone,
        },
        { new: true }
      );
      return newDetails;
    } catch (error) {
      return error.message;
      console.log(error);
    }
  }
  async updateUserAddress(req) {
    try {
      if (!req.user) {
        return "please log in to continue";
      }
      const { _id } = req.user;

      let foundUser = await __UserModel.findById(_id);

      if (!foundUser) {
        return "user not found";
      }

      let newDetails = await __UserModel.findOneAndUpdate(
        { _id },
        {
          billingAddress: { state: req.body.state, location: req.body.location },
        },
        { new: true }
      );
      return newDetails;
    } catch (error) {
      return error.message;
    }
  }

  async updateUserprofileImage(req, image) {
    try {
      if (!req.user) {
        return "please log in to continue";
      }
      const { _id } = req.user;
      let foundUser = await __UserModel.findById(_id);

      if (!foundUser) {
        return "user not found";
      }
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });

      console.log(image);
      return "profile image updated sucessfully";
    } catch (error) {
      return error.message;
    }
  }

  async updateUserPassword(req, oldPassword, newPassword) {
    try {
      if (!req.user) {
        return "please log in to continue";
      }
      const { _id } = req.user;
      let foundUser = await __UserModel.findById(_id);

      if (!foundUser) {
        return "user not found";
      }

      let isPassword = await bcrypt.compare(oldPassword, foundUser.password);

      if (!isPassword) {
        return "incorrect old password";
      }
      foundUser.password = newPassword;
      await foundUser.save();
      return "password updated sucessfully";
    } catch (error) {
      return error.message;
    }
  }
  async verifyUser(code, id) {
    let isverified = await __UserModel.findOne({ _id: id, isVerified: true });
    if (isverified) {
      return "account already verified";
    }
    let foundUser = await __UserModel.findOne({
      _id: id,
      verificationCode: code,
    });

    if (!foundUser) {
      return "verification failed";
    }
    foundUser.verificationCode = undefined;
    foundUser.isVerified = true;
    await foundUser.save();
    return "success";
  }
};
