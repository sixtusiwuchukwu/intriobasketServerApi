const express = require("express");
const paginate = require("paginate-middleware")

const router = express.Router();
const isAuth = require("../../utils/auth/isAuth");

const ProductController = require("../../controller/Product");
const AdminContoller = require("../../controller/User/admin")
const productModel = require("../../models/product")

router.get("/",async (req, res) => {
  let products = await new ProductController().products();
  let page = req.query.page ? req.query.page : 1
let limit= req.query.limit ? req.query.limit : 30
let result = paginate(products,page,limit)
  // res.json(res.paginatedResult)
  res.json(result)
});

router.post("/create", isAuth, async (req, res) => {
  if (!req.user) {
    return res.send("please log in to continue");
  }
 
  const {
    category,
    description,
    cost,
    productImage,
    productName
  } = req.body;
  if ( !productImage | !productName |  !category |  !cost | !description ) {
    return res.send(
      "category, description, cost, productImage,productName must be provided"
    );
  }
  let result = await new ProductController().createProduct(req);
  return res.send(result);
});
router.post("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id | (id === "")) {
    return res.send("product id must be provided");
  }
  let result = new ProductController().product(id);
  return res.send(result);
});
router.delete("/:id", async (req, res) => {
  console.log(req.params)
  // if (!req.user) {
  //   return res.send("please log in to continue");
  // }
  const { id } = req.params;
  if (!id | (id === "")) {
    return res.send("product id must be provided");
  }
  let result = await new ProductController().deleteProduct(id);

  return res.send(result);
});
router.post("/createcategory", isAuth, async (req, res) => {
  if (!req.user) {
    return res.send("please log in to continue");
  }
  const { categoryName } = req.body;
  if (!categoryName | (categoryName === "")) {
    return res.send("category Name must be provided");
  }

  let result = await new AdminContoller().createCategory(categoryName);

  return res.send(result);
});

router.get("/categories",async(req,res)=>{
  let result = await new ProductController().getCategories()
res.send(result)
})

router.get("/search/:product", async (req, res) => {
  const { product } = req.params;
  if (!product | (product === "")) {
    return res.send("search query must contain a value");
  }
  let result = await new ProductController().searchProduct(product);

  return res.send(result);
});
router.get("/category/:categoryname", async (req, res) => {
  const { categoryname } = req.params;

  let result = await new ProductController().getCategory(categoryname);

  return res.send(result);
});

router.get("/recent",async(req,res)=>{
  let result = await new ProductController().getRecentSold(req)
  res.send(result)
})


module.exports = router;
