const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Ola "+req.params.nome+" tudo bem? Seu Cargo e de "+req.params.cargo+" correto ?");

});

app.get('/sobre/:cargo/:nome',function(req,res){
    
});

app.get("/Blog",function(req,res){
    res.send("Seja Bem vindo ao Blog ");
});

app.get("/Contato",function(req,res){
    res.send("Seja bem vindo aos Contatos");
});


app.listen(8083,function(){
    console.log("Está na localizado em http://localhost:8083")
});