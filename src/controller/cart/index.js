const mongoose = require("mongoose");

const __Cart = require("../../models/cart/cart");

module.exports = class CartController {
  async getUserCart(req) {
    if (!req.user) {
      return "login to continue";
    }
    let userCart = await __Cart.find({userId:req.user._id})
    return userCart;
  }
    async AddToCart(req) {
    if (!req.user) {
      return "login to continue";
    }
  try{
     await __Cart.create({...req.body,userId:req.user._id})
    return "added to cart";
  }catch(err){
      console.log(err)
      return ("internal server error")
  }
}
};
