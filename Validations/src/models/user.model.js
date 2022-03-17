const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({

firstname:{type:String,required:true},
lastname:{type:String,required:false},
email:{type:String,required:true},
pincode:{type:Number,required:true},
age:{type:String,required:true},
gender:{type:String,required:false},

})

const User =mongoose.model("user",userSchema);
module.exports=User;