//Archivo que define el modelo 'Habitacion'

const { DataTypes } = require("sequelize");
const sequelize = require("../Database/database.js");  //Importa la instancia de Sequelize que ya se creo

//Construcción de la tabla Habitacion de la base de datos, se define como va a ser la habitacion

const Habitacion = sequelize.define('habitacion', {
    id:{
        type: DataTypes.INTEGER,   //Es un entero
        autoIncrement: true,  //Es autoincrementable
        primaryKey: true,  //Es clave primaria
        allowNull:false  //No se permiten valores nulos
    },
    numero:{
        type: DataTypes.STRING(255),   //Es un string de 255 caracteres de largo
        allowNull: false   //No se permiten valores nulos
    },
    tipo:{
        type: DataTypes.STRING(255),   //Es un string de 255 caracteres
        allowNull: true,   //Se permite que el valor sea nulo, o sea que un producto puede no tener categoria
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),   //Es un numero decimal
        allowNull: false,   //No se permite valores nulos
      },
      estado: {
        type: DataTypes.ENUM('disponible', 'ocupada'),   //La habitacion puede ser desponible u ocupada
        allowNull: false,   //No se permiten valores nulos
      },
},
);

module.exports = Habitacion; //Exporta el modelo 'Habitacion' para que pueda ser utilizado en otros módulos