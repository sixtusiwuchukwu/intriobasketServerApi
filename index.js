require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userApi = require("./src/route/User");
const AdminApi = require("./src/route/User/admin");
const productApi = require("./src/route/Product/");
const CheckoutApi = require("./src/route/Checkout");
const __User = require("./src/models/user")
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json({limit:"50mb"}));
app.use(cors())
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   // res.header(
//   //   "Access-Control-Allow-Headers",
//   //   "Origin, X-Requested-with, Content-Type,Accept, Authorization"
//   // );
//   // response.setHeader("Access-Control-Allow-Credentials", "true");
// response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
// response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, token");

//   if (req.method === "OPTIONS") {
//     res.header(
//       "Access-Control-Allow-Methods",
//       "PUT,POST,GET,DELETE,PATCH,UPDATE"
//     );
//     return res.status(200).json({});
//   }
//   next();
// });


// var whitelist = ['https://intriobasket-testing.netlify.app', 'http://localhost:5500']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions));

app.use("/user", userApi);

app.use("/product", productApi);
app.use("/admin", AdminApi);
app.use("/checkout", CheckoutApi);
mongoose.set('useCreateIndex', true);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(async () => {



   
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
