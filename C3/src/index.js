const express = require("express");

const useControlers = require("./controlers/user.controlers");

const app = express();

app.use(express.json());

app.use("/users",useControlers);
const connect = require("./configs/db")

app.listen(4000,async(req,res)=>{
    try {
        await connect();
        console.log("listening port 4000");
    } catch (error) {
        console.log(error);
    }
})