const mongoose = require("mongoose");

const __Cart = require("../../models/cart/cart");

module.exports = class CartController {
  async getUserCart(req) {
    if (!req.user) {
      return "login to continue";
    }
    let userCart = await __Cart.find({ userId: req.user._id });
    return userCart;
  }
  async AddToCart(req) {
    if (!req.user) {
      return "login to continue";
    }
    try {
      let alreadyAdded = await __Cart.findOne({
        userId: req.user._id,
        productId: req.body.productId,
      });
      if (alreadyAdded) {
        return await __Cart.findOneAndUpdate(
          { userId: req.user._id, productId: req.body.productId },
          { quantity: alreadyAdded.quantity + 1 }
        );
      }
      await __Cart.create({ ...req.body, userId: req.user._id });
    } catch (err) {
      console.log(err);
      return "internal server error";
    } finally {
      return await __Cart.find({ userId: req.user._id });
    }
  }
  async deleteSingleUserCart(req) {
    try {
   await __Cart.findOneAndDelete({
        userId: req.user._id,
        productId: req.params.productId,
      });
     
      return "deleted";
    } catch (err) {
      console.log(err);
      return "internal server";
    }
  }
};