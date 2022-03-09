const express = require("express");
const app = express();

app.get("/books", (req, res) => {
  res.send({
    Book1: "One day life will change",
    Book2: "Power of mind",
    Book3: "The Power of habbit",
    Book4: "Atomic Habbit",
  });
});
app.listen("3000", () => {
  console.log("listening on port 3000");
});