// const express = require("express");
// const sequelize = require('./config/database')
// const userRoutes = require('./routes/userRouter')

// const app = express();

// //Rotas

// app.use('/users', userRoutes);

//     app.get("/user",function(req,res){
//         res.send("Hello word");

//     });

//     app.get("/",function(res,res){
//         res.send("I wrote this letter to remind myself the reasons im alive.")
//     })

//     sequelizethen()
//         app.listen(8083,function(){
//             console.log("Está na localizado em http://localhost:8083")
//         });
const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRouter');

const app = express();
app.use(express.json());

// Rotas
app.use('/users', userRoutes);

// Sincronizar com o banco e iniciar o servidor
sequelize

    app.listen(8083, () => console.log('Servidor rodando na porta 8083'));


module.exports = sequelize;
module.exports = router;