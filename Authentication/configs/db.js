const mongoose = require("mongoose");

module.exports = () =>{
    return mongoose.connect(
        "mongodb+srv://Rushikeshpardhikar:rushikesh12345@cluster0.516ub.mongodb.net/validation?retryWrites=true&w=majority"
    )
}