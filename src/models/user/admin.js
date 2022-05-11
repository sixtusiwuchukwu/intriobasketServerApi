const mongoose = require('mongoose');


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

module.exports = mongoose.model('Admin', AdminSchema)