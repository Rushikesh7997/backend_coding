const mongoose = require("mongoose")

const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://Rushikeshpardhikar:rushikesh12345@cluster0.516ub.mongodb.net/validation?retryWrites=true&w=majority"
    )
}

module.exports=connect;