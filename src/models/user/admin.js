const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const AdminSchema =new mongoose.Schema({
    fullName: {type: String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    phone: {type:String},
    avater: {type:String},
    isActive: { type: Boolean, default: true },
    gender: {type: String, enum:["Male", "Female"]},
    role: {type: String, enum:["superAdmin", "admin", "accountManager", "aggregator", "foreman"]}
}, {
    timestamps: true
})
AdminSchema.pre("save", function (next) {
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
module.exports = mongoose.model('Admin', AdminSchema)