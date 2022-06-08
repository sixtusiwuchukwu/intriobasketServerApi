const __CheckOut = require("../../models/checkout");
const GeneratePdf = require("../../utils/pdfGenerator/pdf")
const __Cart = require("../../models/cart/cart")
module.exports = class ProductController {
  async createCheckOut(req) {
    try {
      if (!req.user) {
        return "login to continue";
      }
     
      let payload = {};
      let cartProducts = [];
      let pdfData = {email:req.user.email,fullName:req.user.fullName,schedule:req.body.deliverySchedule,location:req.body.billingAddress.location,grandTotal:req.body.totalCost,rows:[]}
      payload["user"] = req.user._id;
      req.body.products.map((item) => {
        cartProducts.push({quantity:item.quantity,product:item.id});
        pdfData.rows.push([item.productName,item.cost,item.quantity,(item.cost * item.quantity)])
      });
      pdfData.rows.push([ "", "", "GrandTotal" , req.body.totalCost])
   
      payload["products"] = cartProducts;
      delete req.body.products;
      payload = { ...payload, ...req.body };
      await __CheckOut.create({...payload})
      GeneratePdf(pdfData)
      await __Cart.findAndDelete({userId:req.user._id})
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
    return await __CheckOut.find({ user: req.user._id }).sort({ _id: -1 }).populate("products.product")
  }
  async updateCheckOutStatus(req){
    if (!req.user) {
        return "login to continue";
      }
      await __CheckOut.findOneAndUpdate({_id:req.params.id},{deliveryStatus:req.body.status})
      return "updated"
  }
  //  async filterCheckoutByStatus(req){
  //   if (!req.user) {
  //       return "login to continue";
  //     }
  //     if(req.params.status === "All"){
  //     return  await __CheckOut.find({}).sort({_id:-1})
  //     }else{
  //       return await __CheckOut.find({deliveryStatus:req.params.status}).sort({_id:-1})
  //     }
  // }
};
