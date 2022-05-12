const __CheckOut = require("../../models/checkout");

module.exports = class ProductController {
  async createCheckOut(req) {
    try {
      if (!req.user) {
        return "login to continue";
      }
      let payload = {};
      let cartProducts = [];
      payload["user"] = req.user._id;
      req.body.products.map((item) => {
        cartProducts.push(item._id);
      });
      payload["products"] = cartProducts;
      delete req.body.products;
      payload = { ...payload, ...req.body };
      console.log(payload);
      await __CheckOut.create(payload);

      return "Order placed";
    } catch (err) {
      console.log(err.message);
      return "internal server Error";
    }
  }
  async getUserCheckOut(req) {
    if (!req.user) {
      return "login to continue";
    }
    return await __CheckOut.find({ user: req.user._id }).sort({ _id: 1 });
  }
};
