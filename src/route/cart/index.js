const express = require("express");
const isAuth = require("../../utils/auth/isAuth");

const router = express.Router();
const CartController = require("../../controller/cart");

router.get("/",isAuth,async (req, res) => {
   if(!req.user){
       return "login to Continue"
   }
   let response = await new CartController().getUserCart(req)
   res.send(response)
  });
  router.post("/add",isAuth,async (req, res) => {
   if(!req.user){
      return res.send("login to Continue")
   }
   let response = await new CartController().AddToCart(req)
  return res.send(response)
  }); 
   router.delete("/remove/:productId",isAuth,async (req, res) => {
   if(!req.user){
      return res.send("login to Continue")
   }
   let response = await new CartController().deleteSingleUserCart(req)
  return res.send(response)
  });
  module.exports = router