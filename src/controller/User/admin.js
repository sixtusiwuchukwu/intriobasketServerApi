const __Admin = require("../../models/user/admin");
const __Checkout = require("../../models/checkout");
const __User = require("../../models/user/");
const __Category = require("../../models/category")
const generateToken = require("../../utils/generateToken");
const bcrypt = require("bcrypt");

module.exports = class AdminController {
  async getCheckout(req, res) {
    try {
      const { status } = req.query;
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
      if (status === "all") {
        const checkout = await __Checkout.find({}).sort({ createdAt: -1 });
        return res.status(200).send({
          status: "OK",
          message: "checkout fetched successfully",
          payload: checkout,
        });
      } else {
        const products = await __Checkout
          .find({ deliveryStatus: status })
          .sort({ createdAt: -1 });
        return res.status(200).send({
          status: "OK",
          message: "orders fetched successfully",
          payload: products,
        });
      }
    } catch (error) {
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
  async getUsers(req,res) {
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
    let users = await __User.find({}).sort({ _id: 1 });
    return {
      status: "OK",
      message: "users fetched",
      payload: users,
    };
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      let admin = await __Admin.findOne({ email });
      //Check for User's Email
      if (!admin)
        return res
          .status(404)
          .send({ status: "ERROR", message: "Email not found" });

      let compare = await bcrypt.compare(password, admin.password);
      //Compare user's password and stored password
      if (!compare)
        return res
          .status(403)
          .send({ status: "ERROR", message: "Incorrect Email or Password" });
      else {
        let token = generateToken(admin);

        res.cookie("adminToken", token, {
          maxAge: new Date(Date.now() + 172800000),
          http0nly: true,
        });
        return res.status(200).send({
          status: "OK",
          message: "Log in Successful",
          payload: { ...admin, password: undefined, token },
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: "ERROR",
        payload: error.message,
      });
    }
  }
  async createCategory(req,res){
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
    await __Category.create({name:req.body.categoryName})
    return res.status(200).send({
      status: "OK",
      message: "success",
    });
  } 
   async updateCategory(req,res){
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
    let isFound = await __Category.findOne({name:req.body.categoryName})
    if(isFound){
      return res.status(204).send({
        status: "ERROR",
        message: "name already exist",
      });
    }
    await __Category.findOneAndUpdate({_id:req.query.categoryId},{name:req.body.categoryName})
    return res.status(200).send({
      status: "OK",
      message: "success",
    });
  } 
   async deleteCategory(req,res){
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
    
   
    await __Category.findOneAndDelete({_id:req.query.categoryId})
    return res.status(200).send({
      status: "OK",
      message: "success",
    });
  }
};
