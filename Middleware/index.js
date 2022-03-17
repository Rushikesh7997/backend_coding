const express = require("express");
const app = express();

app.use(logger1, logger2);

app.get("/books",logger1, (req, res) => {
    return res.send("All books");
});
  
app.get("/books/:name",logger2, (req, res) => {
    req.name = req.params.name;
    res.send({bookName: req.name});
});
  
function logger1(req, res, next) {
    console.log ( "Fetching all books")
    next();  
}
  
function logger2(req, res, next){  
    console.log(req.params);
    next(); 
}
  
app.listen(4000, function () {
    console.log("listening on port 4000");
})