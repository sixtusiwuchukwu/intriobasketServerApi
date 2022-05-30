const mongoose = require("mongoose");

const __Cart = require("../../models/cart");

module.exports = class CartController {
  async getUserCart(req) {
    if (!req.user) {
      return "login to continue";
    }
    let userCart = await __Cart.find({user:req.user._id})
    return userCart;
  }
    async addToCart(req) {
    if (!req.user) {
      return "login to continue";
    }
     await __Cart.create({...req.body,user:req.user._id})
    return "added to cart";
  }
};
