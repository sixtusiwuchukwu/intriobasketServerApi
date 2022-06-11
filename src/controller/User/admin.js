const __Admin = require("../../models/user/admin");
const __Checkout = require("../../models/checkout");
const __User = require("../../models/user/");
const __product = require("../../models/product");
const __Category = require("../../models/category");
const generateToken = require("../../utils/generateToken");
const generatePassword = require("../../utils/generateadminPassword");
const sendMail = require("../../utils/emailUtils/email.service");
const WelcomeTemplate = require("../../utils/emailTemplete/email");
const bcrypt = require("bcrypt");
const moment = require('moment');

module.exports = class AdminController {
  async getCheckout(req, res) {
    try {
      const { status } = req.query;

      const admin = await __Admin.findOne({
        _id: req.user._id,
        role: {
          $in: [
            "superAdmin",
            "aggregator",
            "admin",
            "accountManager",
            "foreman",
          ],
        },
      });

      if (!admin) {
        return "wrong priviledge";
      }
      if (status === "all") {
        return await __Checkout
          .find({})
          .populate("user")
          .sort({ createdAt: -1 });
      } else {
        return await __Checkout
          .find({ deliveryStatus: status })
          .populate("user")
          .sort({ createdAt: -1 });
      }
    } catch (error) {
      console.log(error);
      return "internal server Error";
    }
  }

  async updateCheckoutStatus(req, res) {
    try {
      const { status, checkoutId } = req.body;
      const admin = await __Admin.findOne({
        _id: req.user._id,
        role: ["superAdmin", "aggregator", "admin"],
      });
      if (!admin) {
        return res.status(401).send({
          status: "ERROR",
          message: "wrong priviledge",
        });
      }
      await __Checkout.findOneAndUpdate(
        { _id: checkoutId },
        { deliveryStatus: status }
      );
    } catch (error) {
      return res.status(500).send({
        status: "ERROR",
        payload: error.message,
      });
    }
  }
  async getUsers(req, res) {
    // if(!req.user){
    //   return "login to continue"
    // }
    // const admin = await __Admin.findOne({
    //   _id: req.user._id,
    //   role: ["superAdmin", "aggregator", "admin"],
    // });
    // if (!admin) {
    //   return res.status(401).send({
    //     status: "ERROR",
    //     message: "wrong priviledge",
    //   });
    // }
    let users = await __User.find({}).sort({ _id: -1 });
    return {
      status: "OK",
      message: "users fetched",
      payload: users,
    };
  }
  async getAdmins(req) {
    if (!req.user) {
      return "login to continue";
    }
    const admin = await __Admin.findOne({
      _id: req.user._id,
      role: "superAdmin",
    });
    if (!admin) {
      return "wrong priviledge";
    }
    return await __Admin.find({}).sort({ _id: -1 });
  }

  async login(req) {
    try {
      const { email, password } = req.body;

      let admin = await __Admin.findOne({ email, isActive: "true" });
      //Check for User's Email
      if (!admin) return { status: "ERROR", message: "Email not found" };

      let compare = await bcrypt.compare(password, admin.password);
      //Compare user's password and stored password
      if (!compare)
        return { status: "ERROR", message: "Incorrect Email or Password" };
      else {
        let token = await generateToken(admin);

        return {
          status: "OK",
          message: "Log in Successful",
          payload: { user: { ...admin._doc, password: undefined }, token },
        };
      }
    } catch (error) {
      return {
        status: "ERROR",
        payload: error.message,
      };
    }
  }
  async createCategory(req, res) {
    const admin = await __Admin.findOne({
      _id: req.user._id,
      role: ["superAdmin", "aggregator", "admin"],
    });

    if (!admin) {
      return res.status(401).send({
        status: "ERROR",
        message: "wrong priviledge",
      });
    }
    await __Category.create({ name: req.body.categoryName });
    return res.status(200).send({
      status: "OK",
      message: "success",
    });
  }
  async updateCategory(req, res) {
    const admin = await __Admin.findOne({
      _id: req.user._id,
      role: ["superAdmin", "aggregator", "admin"],
    });

    if (!admin) {
      return res.status(401).send({
        status: "ERROR",
        message: "wrong priviledge",
      });
    }
    let isFound = await __Category.findOne({ name: req.body.categoryName });
    if (isFound) {
      return res.status(204).send({
        status: "ERROR",
        message: "name already exist",
      });
    }
    await __Category.findOneAndUpdate(
      { _id: req.query.categoryId },
      { name: req.body.categoryName }
    );
    return res.status(200).send({
      status: "OK",
      message: "success",
    });
  }
  async deleteCategory(req, res) {
    const admin = await __Admin.findOne({
      _id: req.user._id,
      role: ["superAdmin", "aggregator", "admin"],
    });

    if (!admin) {
      return res.status(401).send({
        status: "ERROR",
        message: "wrong priviledge",
      });
    }

    await __Category.findOneAndDelete({ _id: req.query.categoryId });
    return res.status(200).send({
      status: "OK",
      message: "success",
    });
  }
  async createAdmin(req, res) {
    // const admin = await __Admin.findOne({
    //   _id: req.user._id,
    //   role: "superAdmin",
    // });
    // if (!admin) {
    //   return "wrong priviledge";
    // }
    try {
      let alreadyUser = await __Admin.findOne({ email: req.body.email });
      let password = generatePassword();
      if (!alreadyUser) {
        await __Admin.create({
          ...req.body,
          password: password,
        });

        let mailPayLoad = {
          fullName: req.body.fullName,
          message: `You have been granted ${req.body.role} access welcome to Intriobasket, a market place where rendering quality service to our customers is  our pirority your login password is <b>${password}</b>`,
        };
        let ok = await sendMail({
          email: req.body.email,
          // email: req.body.email,
          subject: `${req.body.role.toUpperCase()} ACCESS`,
          copy: ["admin@intriobasket.ng"],
          html: WelcomeTemplate(
            mailPayLoad.fullName,
            mailPayLoad.message,
            mailPayLoad.actionText
          ),
        });
        console.log(ok);

        return "Admin Account created sucessfully";
      }
      return `Admin with this email ${req.body.email} already Exist`;
    } catch (error) {
      return error.message;
    }
  }
  async getStatistics(req, res) {
    let stat = {};

    stat["productsCount"] = await __product.find({}).countDocuments();
    stat["ordersCount"] = await __Checkout.find({}).countDocuments();
    stat["adminCount"] = await __Admin.find({}).countDocuments();
    stat["recentOrder"] = await __Checkout.find({}, "", { sort: { _id: -1 }, limit: 5 }).populate("user");
    stat["userCount"] = await __User.find({}).countDocuments();
    let totalSales = await __Checkout.aggregate([
      { $group: { _id: null, totalCost: { $sum: "$totalCost" } } },
    ]);
    
    stat["totalCost"] = totalSales[0].totalCost;
    return stat;
  }
  async updateRole(req, res) {
    if (!req.user) {
      return "login to continue";
    }
    const admin = await __Admin.findOne({
      _id: req.user._id,
      role: { $in: ["superAdmin"] },
    });
    if (!admin) {
      return "wrong priviledge";
    }
    await __Admin.findOneAndUpdate(
      { _id: req.params.adminId },
      { role: req.body.role }
    );
    return "updated";
  }
  async UpdateAccountStatus(req, res) {
    if (!req.user) {
      return "login to continue";
    }
    const admin = await __Admin.findOne({
      _id: req.user._id,
      role: { $in: ["superAdmin", "admin"] },
    });
    if (!admin) {
      return "wrong priviledge";
    }
    await __Admin.findOneAndUpdate(
      { _id: req.params.adminId },
      { isActive: req.body.status }
    );
    return "updated";
  }
  async UpdateUserAccountStatus(req, res) {
    // if(!req.user){
    //   return "login to continue"
    // }
    // const admin = await __Admin.findOne({
    //   _id: req.user._id,
    //   role: "superAdmin",
    // });
    // if (!admin) {
    //   return res.status(401).send({
    //     status: "ERROR",
    //     message: "wrong priviledge",
    //   });
    // }
    await __User.findOneAndUpdate(
      { _id: req.params.userId },
      { isActive: req.body.status }
    );
    return "updated";
  }
  async deleteAccount(req, res) {
    if (!req.user) {
      return "login to continue";
    }
    const admin = await __Admin.findOne({
      _id: req.user._id,
      role: "superAdmin",
    });
    if (!admin) {
      return "wrong priviledge";
    }
    await __Admin.findOneAndDelete({ _id: req.params.adminId });
    return "deleted";
  }
  async searchAdmin(admin) {
    const foundAdmin = await __Admin.findOne({
      _id: req.user._id,
      role: { $in: ["superAdmin"] },
    });
    if (!foundAdmin) {
      return "wrong priviledge";
    }
    try {
      let result = await __Admin.find({
        $or: [
          { fullName: { $regex: admin, $options: "i" } },
          { email: { $regex: admin, $options: "i" } },
        ],
      });
      return result;
    } catch (error) {
      return error.message;
    }
  }
  async searchCustomer(customer) {
    try {
      let result = await __User.find({
        $or: [
          { fullName: { $regex: customer, $options: "i" } },
          { email: { $regex: customer, $options: "i" } },
        ],
      });
      return result;
    } catch (error) {
      return error.message;
    }
  }
  async FilterAdminByRole(req) {
    if (!req.user) {
      return "login to continue";
    }
    const admin = await __Admin.findOne({
      _id: req.user._id,
      role: { $in: ["superAdmin", "admin"] },
    });
    if (!admin) {
      return "wrong priviledge";
    }
    let { query } = req.params;

    if (query !== "All") {
      return await __Admin.find({ role: query }).sort({ _id: -1 });
    }
    return await __Admin.find({}).sort({ _id: -1 });
  }
  async customerFilter(req) {
    let { query } = req.params;

    if (query !== "All") {
      return await __User.find({ isActive: query }).sort({ _id: -1 });
    }
    return await __User.find({}).sort({ _id: -1 });
  }
  async updatePassword(req, oldPassword, newPassword) {
    try {
      if (!req.user) {
        return "please log in to continue";
      }
      const { _id } = req.user;
      let foundUser = await __Admin.findById(_id);

      if (!foundUser) {
        return "user not found";
      }

      let isPassword = await bcrypt.compare(oldPassword, foundUser.password);

      if (!isPassword) {
        return "incorrect old password";
      }
      foundUser.password = newPassword;
      await foundUser.save();
      return "password updated";
    } catch (error) {
      return error.message;
    }
  }
};
