const express = require("express")
const app = express();
// console.log(app);

app.get("/users",(req,res)=>{
    // console.log("hello");
    res.send("hello");
});
app.listen(5000, ()=>{
    console.log("listening on port 5000");
});