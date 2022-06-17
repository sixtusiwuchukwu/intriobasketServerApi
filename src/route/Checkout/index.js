const express = require("express");

const router = express.Router();
const isAuth = require("../../utils/auth/isAuth");
const checkOutController = require("../../controller/Checkout")

router.post("/create",isAuth,async(req,res)=>{
let result = await new checkOutController().createCheckOut(req)
res.send(result)
})
router.get("/",isAuth,async(req,res)=>{
let result = await new checkOutController().getUserCheckOut(req)
res.send(result)
})
router.put("/updatestatus/:id",isAuth,async(req,res)=>{
let result = await new checkOutController().updateCheckOutStatus(req)
res.send(result)
})
router.get("/single/:Id",isAuth,async(req,res)=>{
let result = await new checkOutController().SingleCheckOut(req)
res.send(result)
})
// / router.get("/filterbystatus/:status",isAuth,async(req,res)=>{
// let result = await new checkOutController().filterCheckoutByStatus(req)
// res.send(result)
// })

module.exports = router