const express = require("express");

const connect = require("./configs/db");

const userController= require("./controller/user.controller");

const postController= require("./controller/post.controller")

const {register, login} =  require("./controller/auth.controller")

const app = express();

app.use(express.json());

app.use("/users", userController);

app.use("/posts", postController)

const { body, validationResult } = require('express-validator');

const Name_validations= body("name").isString();

const email_validation=body("email").isEmail();

const pass_validation=  body("password").custom( value => {
    let pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (pattern.test(value)) {
      return true
      }
      throw new Error('Password is wrong')
    });



app.post("/register",Name_validations, email_validation, pass_validation, register )

app.post("/login",  email_validation, pass_validation,  login)

app.listen(2345, async function (){
    try {
       await connect();
        console.log("listening on port 2345");

    } catch (err) {
        console.log("err:", err.message)
    }
});