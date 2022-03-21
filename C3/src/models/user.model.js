const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true,minlength:3,maxlength:30},
    lastName:{type:String,required:false,minlength:3,maxlength:30},
    age:{type:Number,required:true,type:Unique},
    email:{type:String,required:true},
    profileImages:{},
},
{
    required:true,
    timestamps: true,
}
)

const User = mongoose.model("user",userSchema);
module.exports=User;

// firstName (string, required, minimum length 3 and maximum length 30)
// lastName (string, optional, if given then minimum length 3 and maximum length 30)
// age (integer, required, should be between 1 and 150)
// email (string, required, unique)
// profileImages: (array of imageUrls and atleast 1 profile image is required)
// timestamps (string, required)