require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userApi = require("./src/route/User");
const productApi = require("./src/route/Product/");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-with, Content-Type,Accept, Authorization"
//   );

//   if (req.method === "OPTIONS") {
//     res.header(
//       "Access-Control-Allow-Methods",
//       "PUT,POST,GET,DELETE,PATCH,UPDATE"
//     );
//     return res.status(200).json({});
//   }
//   next();
// });

const corsOptions = {
  Origin: "http://localhost:3000/",
  // optionsSucessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/user", userApi);

app.use("/product", productApi);

mongoose
  // .connect(
  //   "mongodb+srv://sixtus4545:@sixtus4545@sixtusdb-cqswn.mongodb.net/test?retryWrites=true&w=majority",
  //   { useNewUrlParser: true }
  // )
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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

// mongoose.Promise = global.Promise;

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`shopwitbee server is connected on port ${PORT}`);
});
