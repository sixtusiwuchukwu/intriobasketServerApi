const express = require("express");

const router = express.Router();
const isAuth = require("../../utils/auth/isAuth");
const AdminController = require("../../controller/User/admin")

router.get("/users",isAuth,async(req,res)=>{

const result = await new AdminController().getUsers(req,res)
res.send(result)
})
router.get("/",isAuth,async(req,res)=>{

const result = await new AdminController().getAdmins(req,res)
res.send(result)
})
router.put("/updaterole/:adminId",isAuth,async(req,res)=>{
const result = await new AdminController().updateRole(req,res)
res.send(result)
})
router.get("/checkouts",isAuth,async(req,res)=>{

const result = await new AdminController().getCheckout(req,res)
res.send(result)
})
router.post("/login",async(req,res)=>{

const result = await new AdminController().login(req,res)
res.send(result)
})
router.post("/newadmin",async(req,res)=>{

const result = await new AdminController().createAdmin(req,res)
res.send(result)
})
router.post("/statistics",async(req,res)=>{

const result = await new AdminController().getStatistics(req,res)
res.send(result)
})

module.exports = router;
