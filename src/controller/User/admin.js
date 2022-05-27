const __Admin = require("../../models/user/admin");
const __Checkout = require("../../models/checkout");
const __User = require("../../models/user/");
const __product = require("../../models/product")
const __Category = require("../../models/category");
const generateToken = require("../../utils/generateToken");
const generatePassword = require("../../utils/generateadminPassword");
const sendMail = require("../../utils/emailUtils/email.service");
const WelcomeTemplate = require("../../utils/emailTemplete/email")
const bcrypt = require("bcrypt");

module.exports = class AdminController {
  async getCheckout(req, res) {
    try {
      const { status } = req.query;

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
      if (status === "all") {
        const checkout = await __Checkout
          .find({})
          .populate("user")
          .sort({ createdAt: -1 });
        return ({
          status: "OK",
          message: "checkout fetched successfully",
          payload: checkout,
        });
      } else {
        const products = await __Checkout
          .find({ deliveryStatus: status })
          .populate("user")
          .select({ fullName: 1 })
          .sort({ createdAt: -1 });
        return res.status(200).send({
          status: "OK",
          message: "orders fetched successfully",
          payload: products,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        status: "ERROR",
        payload: error.message,
      });
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
    async getAdmins(req, res) {
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
    let admins = await __Admin.find({}).sort({ _id: -1 });
    return {
      status: "OK",
      message: "admin fetched",
      payload: admins,
    };
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      let admin = await __Admin.findOne({ email });
      //Check for User's Email
      if (!admin)
        return ({ status: "ERROR", message: "Email not found" });

      let compare = await bcrypt.compare(password, admin.password);
      //Compare user's password and stored password
      if (!compare)
        return ({ status: "ERROR", message: "Incorrect Email or Password" });
      else {
        let token = await generateToken(admin);

        return ({
          status: "OK",
          message: "Log in Successful",
          payload: { user:{...admin._doc,password: undefined,},  token },
        });
      }
    } catch (error) {
      return ({
        status: "ERROR",
        payload: error.message,
      });
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
  async createAdmin(req,res){
    // const admin = await __Admin.findOne({
    //   _id: req.user._id,
    //   role: ["superAdmin"],
    // });
      try {
        let alreadyUser = await __Admin.findOne({ email:req.body.email });
        let password = generatePassword();
        if (!alreadyUser) {
          await __Admin.create({
            ...req.body,
            password:password ,
          });
         
          let mailPayLoad = {
            fullName:req.body.fullName,
            message : `You have been granted ${req.body.role} access welcome to Intriobasket, a market place where rendering quality service to our customers is  our pirority your login password is <b>${password}</b>`,
            
          }
         let ok =  await sendMail({
            email: req.body.email,
            // email: req.body.email,
            subject: `${req.body.role.toUpperCase() } ACCESS`,
            copy: ["admin@intriobasket.ng"],
            html:WelcomeTemplate(mailPayLoad.fullName,mailPayLoad.message,mailPayLoad.actionText)
        })
        console.log(ok)
          
          return "user Account created sucessfully";
        }
        return `user with this email ${req.body.email} already Exist`;
      } catch (error) {
        return error.message;
      }
    
  }
  async getStatistics(req,res){
let stat = {}

let productsCount = await __product.find({}).countDocument()
let ordersCount = await __Checkout.find({}).countDocumnet()
let userCount = await __User.find({}).countDocument()
let categoryCount = await __Category.find({}).countDocument()
}
async updateRole(req,res){
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
    await __Admin.findOneAndUpdate({_id:req.params.adminId},{role:req.body.role})
    return "updated"
}
};
