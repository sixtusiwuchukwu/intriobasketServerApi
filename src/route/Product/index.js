const express = require("express");

const router = express.Router();
const isAuth = require("../../utils/auth/isAuth");

const ProductController = require("../../controller/Product");

router.get("/", async (req, res) => {
  let products = await new ProductController().products();
  res.send(products);
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
      "productimage,productname,catergory,collection,price,description must be provided"
    );
  }
  let result = await new ProductController().createProduct(
    productImage,
    productName,
    category,
    cost,
    description
  );
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
router.delete("/:id", isAuth, async (req, res) => {
  if (!req.user) {
    return res.send("please log in to continue");
  }
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

  let result = await new ProductController().createCategory(categoryName);

  return res.send(result);
});
router.post("/createcollection", isAuth, async (req, res) => {
  if (!req.user) {
    return res.send("please log in to continue");
  }
  const { collectionname } = req.body;
  if (!collectionname | (collectionname === "")) {
    return res.send("collection Name  must be provided");
  }
});
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

  let result = await new ProductController().category(categoryname);

  return res.send(result);
});


module.exports = router;
