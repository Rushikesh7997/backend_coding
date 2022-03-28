const mongoose = require("mongoose");

const userSchema = new ongoos.Schema({
    firstName : {type:String, required:true},
    lastName : {type : String,},
    email : {type:String, require:true, unique : true},
    password : {type : String,require : true},
    createdAt : {type : Date, required : true, defalut: Date.now},
    updatedAt : new Date(),
},
{
    version : false,
    timestamp : true,
    
})