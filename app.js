const express = require("express");
const app = express();

//Rotas
    app.get("/",function(req,res){
        res.send("Hello word");

    });

app.listen(8083,function(){
    console.log("Está na localizado em http://localhost:8083")
});