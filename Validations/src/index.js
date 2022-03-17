const express= require("express");

const  usersController=require("./controlers/user.controler");

const app=express();

app.use(express.json());

app.use("/users",usersController);

const connect = require("./configs/db");

app.listen(4000,async(req,res)=>{

try{
await connect();
console.log("Listening port 4000");

}catch(err){
    console.log(err);
}
})