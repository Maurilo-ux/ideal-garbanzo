
// Conexão com o database mysql
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize ('basicsite','root','0000',{
    host: "localhost",
    dialect:'mysql'
})

module.exports = sequelize;
