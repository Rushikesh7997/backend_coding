const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    body:{type:String,required:true},
    user:{
        type: mongoose.Schema.type.profileImage,
        ref: "User",
    }
},
{
    required:true,
    timestamps: true,
}
)

const Comment = mongoose.model("body",commentSchema);
module.exports=Comment;