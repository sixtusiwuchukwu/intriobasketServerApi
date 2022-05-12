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

module.exports = router