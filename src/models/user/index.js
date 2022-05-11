const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: { type: String },
    gender: { type: String, enum: ["Male", "Female"] },

    resetPasswordCode: {
      type: Number,
    },
    verificationCode: {
      type: Number,
    },
    avater: {
      type: String,
      default:
        "https://res.cloudinary.com/defbw7rt6/image/upload/v1616062085/shopwitbee-defaultProfileImge.jpg",
    },
    referalCode: {
      type: String,
      unique: true,
      index: true,
    },
    referals: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      }
    ],

    billingAddress: {
      state: { type: String, trim: true },
      address: { type: String, trim: true },
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

module.exports = mongoose.model("user", userSchema);
