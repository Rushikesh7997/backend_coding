const express=require("express")
const app=express()
app.use(logger)
app.get("/books",function(req,res){
    res.send( { route: "/books"})
})

app.get("/libraries",checkPermission("librarian"),(req,res) =>{
    res.send({ route: "/libraries", permission:req.role})
})

app.get("/authors",checkPermission("authors"),(req,res)=>{
    res.send({ route: "/authors", permission:req.role})
})

function checkPermission(permission)
{
    return function checkPermission(req,res,next)
    {
        if((permission=="librarian")||(permission=="authors"))
        {
            req.role="true"
            return next()
        }
       
        else{
            return res.send("Not allowed")
        }
    }
}
function logger(req,res,next)
{
   
    next()
}
app.listen(3000,() =>{
    console.log("listening on port 3000")
})