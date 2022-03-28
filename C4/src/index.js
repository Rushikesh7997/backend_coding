const express = require("express");

const connect = require 

const userController = require

const postController = require

const app = express();

app.use(express.json());

app.use("/users",userController);
app.use("/posts",postController);

const { body, validationResult } = require ('express-validator');

const Name_validator = body ("name").isString();
const email_validator = body ("email").isString();

const pass_validator = 


app.post ("/register",)

app.post("/login",)


app.listen(4500, async function(){
    try {
        await connect();
        console.log("listening on port 4500");;
    }
    catch(err){
        console.log("err:",err.massage);
    }

});