require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userApi = require("./src/route/User");
const productApi = require("./src/route/Product/");
const CheckoutApi = require("./src/route/Checkout");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


const corsOptions = {
  Origin: "http://localhost:3000/",
  // optionsSucessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/user", userApi);

app.use("/product", productApi);
// app.use("/checkout", CheckoutApi);
mongoose.set('useCreateIndex', true);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => {
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
