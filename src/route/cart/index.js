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
       return "login to Continue"
   }
   let response = await new CartController().AddToCart(req)
   res.send(response)
  });