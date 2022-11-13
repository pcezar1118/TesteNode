const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function (req, res) {
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function (req, res) {
    res.send("Hello Blog!");
});

app.get("/Ola/:nome/:cargo/:cor", function (req, res) { 
    res.send("<h1>Ola, Paulo!" + req.params.nome + "</h1>" +
    "<h2>Seu cargo e: " + req.params.cargo + "</h2>" + "<h3>Sua cor favorita e:" + req.params.cor + "</h3>");
})




app.listen(8081, function (){
  console.log("Server listening on port 8081");
});
