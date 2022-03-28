const mongoose = require("mongoose");

const postSchema =  new mongoose.Schema({
    title : {type:String, required:true },
    createdAt : {type : Date, required : true, defalut: Date.now},
    User : [{type : mongoose.Schema.Type.email, ref:user}],
    updatedAt : new Date(),
},
{
    version : false,
    timestamp : true,
})

module.exports = mongoose.model("post",postSchema);