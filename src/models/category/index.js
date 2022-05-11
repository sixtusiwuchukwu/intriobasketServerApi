const mongoose = require("mongoose")

const CategorySchema =  new mongoose.Schema({
name:{
    type:String,
    trim:true,
    unique:true,
    index:true
}
},{timestamp:true});

module.export = mongoose.model("category",CategorySchema)

