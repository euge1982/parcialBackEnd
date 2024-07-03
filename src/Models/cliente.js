//Archivo que define el modelo 'Cliente'

const { DataTypes } = require("sequelize");
const sequelize = require("../Database/database.js");  //Importa la instancia de Sequelize que ya se creo

//Construcción de la tabla Cliente de la base de datos, se define como va a ser el cliente

const Cliente = sequelize.define('cliente', {
    id:{
        type: DataTypes.INTEGER,   //Es un entero
        autoIncrement: true,  //Es autoincrementable
        primaryKey: true,  //Es clave primaria
        allowNull:false  //No se permiten valores nulos
    },
    nombre:{
        type: DataTypes.STRING(255),   //Es un string de 255 caracteres de largo
        allowNull: false   //No se permiten valores nulos
    },
    email:{
        type: DataTypes.STRING(255),   //Es un string de 255 caracteres
        allowNull: true,   //Se permite que el valor sea nulo, o sea que un producto puede no tener categoria
        unique: true,   //La direccion de email es unica
    },
    telefono:{ 
        type: DataTypes.STRING(255),   //Es un string de 255 caracteres
        allowNull: false,   //No se permiten valores nulos
    },
}
);

module.exports = Cliente; //Exporta el modelo 'Cliente' para que pueda ser utilizado en otros módulos