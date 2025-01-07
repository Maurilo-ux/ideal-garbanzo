const Sequelize = require ('sequelize')
const sequelize = new Sequelize ('basicsite','root','0000',{
    host: "localhost",
    dialect:'mysql'
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!")
}).catch(function(erro){
    console.log("falha ao se conectar!"+ erro)
});
// para se conectar use nodemon conecte.js para testar.

// Postagem e Usuarios criadas 
// CRIA E PODE ATUALIZAR. 
const Postagem = sequelize.define('postagem',{
    titulo: {
        type: Sequelize.STRING 
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})


const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
})

// USE APENAS UMA UNICA VEZ, APÓS UTILIZA DESATIVE: PODE GERAR TABELAS DUPLICADAS
// Postagem.sync({force: true})
// Usuario.sync({force: true})