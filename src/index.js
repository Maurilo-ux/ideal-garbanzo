const express = require("express");
const sequelize = require('./config/database')
const mainRoutes = require('./routes/mainRoutes')

const app = express();

//Rotas

app.use('/', mainRoutes);


app.get("/secret",function(res,res){
    res.send("I wrote this letter to remind myself the reasons im alive.")
})

app.listen(8083,function(){
    console.log("Está na localizado em http://localhost:8083")
});