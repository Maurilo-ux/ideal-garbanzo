const {DataTypes} = require ('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    idade:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Usuario;