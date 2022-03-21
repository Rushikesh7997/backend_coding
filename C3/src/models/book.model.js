const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    likes:{type:Number,required:true},
    coverImage:{type:String,required:true},
    content:{type:String,required:true},
},
{
    required:true,
    timestamps: true,
})
const Book = mongoose.model("book",bookSchema);
module.exports=Book;


// Book Model

// likes (integer, minimum default is 0)
// coverImage (string, required and it can be 1 only)
// content ( string, required)
// timestamps (string, required)