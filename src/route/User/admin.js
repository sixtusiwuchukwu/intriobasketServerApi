const express = require("express");

const router = express.Router();
const isAuth = require("../../utils/auth/isAuth");
const AdminController = require("../../controller/User/admin")

router.get("/users",isAuth,async(req,res)=>{

const result = await new AdminController().getUsers(req,res)
res.send(result)
})
router.get("/checkouts",isAuth,async(req,res)=>{

const result = await new AdminController().getCheckout(req,res)
res.send(result)
})

module.exports = router;
