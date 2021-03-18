const __UserModel = require("./../../models/user");

const bcrypt = require("bcrypt");

const cloudinary = require("cloudinary").v2;

const GenerateToken = require("../../utils/generateToken");

const GenerateCode = require("../../utils/generateVerificationCode");

const EmailUtils = require("../../utils/emailUtils/emailUtiles");

module.exports = class UserController {
  async userSignup(username, email, password) {
    try {
      let alreadyUser = await __UserModel.findOne({ email });
      if (!alreadyUser) {
        await __UserModel.create({ email, username, password });
        return "user Account created sucessfully";
      }
      return `user with this gmail ${email} already Exist`;
    } catch (error) {
      return error.message;
    }
  }

  async userLogin(email, password) {
    let founduser = await __UserModel.findOne({ email });
    if (!founduser) {
      return "user not found";
    }

    const isPassword = await bcrypt.compare(password, founduser.password);

    if (!isPassword) {
      return " incorrect user password";
    }
    let { email: userEmail, username, isAdmin } = founduser;
    return {
      token: await GenerateToken(founduser),
      user: { userEmail, username, isAdmin },
    };
  }
  async forgetpassword(email, req) {
    let founduser = await __UserModel.findOne({ email });

    if (!founduser) {
      return "Email address does not exist with shopwitbee";
    }
    const code = await GenerateCode(); /*Generate verification code*/
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
        verificationLink: `${req.headers.origin}/verify?=${code}`,
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
      console.log("please log in to continue");
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
      console.log("please log in to continue");
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
        fullName: founduser.username,
        message: "Welcome. Your password reset code is below.",
        verificationLink: `${req.headers.origin}/verify?=${code}`,
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
  // user set new password when forgotten password
  async resetPassword(req, newPassword) {
    if (!req.user) {
      console.log("please log in to continue");
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

  async updateUserProfile(req, username, email) {
    try {
      if (!req.user) {
        console.log("please log in to continue");
        return "please log in to continue";
      }
      const { _id } = req.user;

      let foundUser = await __UserModel.findById(_id);

      if (!foundUser) {
        return "user not found";
      }

      await __UserModel.findOneAndUpdate(
        { _id },
        { username, email },
        { new: true }
      );
      return "user Account updated sucessfully";
    } catch (error) {
      return error.message;
    }
  }

  async updateUserprofileImage(req, image) {
    try {
      if (!req.user) {
        console.log("please log in to continue");
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

      await cloudinary.uploader.upload(
        image,
        {
          width: 512,
          height: 512,
          crop: "scale",
          allowed_formats: ["jpg", "png", "jpeg", "svg", "bmp"],
          public_id: "",
          folder: "shopwitbee-userProfile",
        },
        async function (error, result) {
          if (error) {
            return error.message;
          }
          await __UserModel.findOneAndUpdate(
            { _id },
            {
              avater: result.secure_url,
            },
            { new: true }
          );
        }
      );
      return "profile image updated sucessfully";
    } catch (error) {
      return error.message;
    }
  }

  async updateUserPassword(req, oldPassword, newPassword) {
    try {
      if (!req.user) {
        console.log("please log in to continue");
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
};
