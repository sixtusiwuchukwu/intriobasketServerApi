const express = require("express");

const router = express.Router();
const isAuth = require("../../utils/auth/isAuth");
const AdminController = require("../../controller/User/admin")

router.get("/users",isAuth,async(req,res)=>{

const result = await new AdminController().getUsers(req,res)
res.send(result)
})
router.get("/searchcustomer/:customer", async (req, res) => {
    const { customer } = req.params;
    if (!customer | (customer === "")) {
      return res.send("search query must contain a value");
    }
    let result = await new AdminController().searchCustomer(customer);
  
    return res.send(result);
  });
  router.get("/search/:admin", async (req, res) => {
    const { admin } = req.params;
    if (!admin | (admin === "")) {
      return res.send("search query must contain a value");
    }
    let result = await new AdminController().searchAdmin(admin);
  
    return res.send(result);
  });
  router.get("/filter/:query", async (req, res) => {
    const { query } = req.params;
    if (!query | (query === "")) {
      return res.send("search query must contain a value");
    }
    let result = await new AdminController().FilterAdminByRole(req,res);
  
    return res.send(result);
  }); 
   router.get("/customerfilter/:query", async (req, res) => {
    const { query } = req.params;
    if (!query | (query === "")) {
      return res.send("search query must contain a value");
    }
    let result = await new AdminController().customerFilter(req,res);
  
    return res.send(result);
  });

router.get("/",isAuth,async(req,res)=>{

const result = await new AdminController().getAdmins(req,res)
res.send(result)
})
router.put("/updaterole/:adminId",isAuth,async(req,res)=>{
const result = await new AdminController().updateRole(req,res)
res.send(result)
})
router.put("/updateaccountstatus/:adminId",isAuth,async(req,res)=>{
const result = await new AdminController().UpdateAccountStatus(req,res)
res.send(result)
})
router.put("/updateuseraccountstatus/:userId",isAuth,async(req,res)=>{
const result = await new AdminController().UpdateUserAccountStatus(req,res)
res.send(result)
})
router.delete("/deleteaccount/:adminId",isAuth,async(req,res)=>{
const result = await new AdminController().deleteAccount(req,res)
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
