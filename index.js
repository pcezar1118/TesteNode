const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/sobre", function (req, res) {
    res.send("Hello Sobre!");
});

app.get("/blog", function (req, res) {
    res.send("Hello Blog!");
});




app.listen(8081, function (){
  console.log("Server listening on port 8081");
});
