require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userApi = require("./src/route/User");
const AdminApi = require("./src/route/User/admin");
const productApi = require("./src/route/Product/");
const CheckoutApi = require("./src/route/Checkout");
const ProductModel = require("./src/models/product")
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json({limit:"50mb"}));


const corsOptions = {
  // Origin: "http://localhost:3000/",
  Origin: "http://localhost:5500/",
  // optionsSucessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/user", userApi);

app.use("/product", productApi);
app.use("/admin", AdminApi);
// app.use("/checkout", CheckoutApi);
mongoose.set('useCreateIndex', true);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(async () => {
// try{
//   await ProductModel.insertMany(ProductData)
// }catch(e){
//   console.log(e)
// }
   
    setTimeout(() => {
      console.log(`Database is connected to ${process.env.DB_URL}`);
    }, 4000);
  })
  .catch((err) => {
    setTimeout(() => {
      console.log("could not connect");
      console.log(err);
    }, 4000);
    console.log("...connecting to database");
  });




const PORT = process.env.PORT || 2090;

app.listen(PORT, () => {
  console.log(`Intriobasket server is connected on port ${PORT}`);
});
