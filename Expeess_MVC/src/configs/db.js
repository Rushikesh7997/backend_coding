const mongoose = require("mongoose");

const connect = () => {

    return mongoose.connect(
        "mongodb+srv://Rushikesh_12345@cluster0.tiemy.mongodb.net/database2?retryWrites=true&w=majority"
    );
};

module.exports = connect;