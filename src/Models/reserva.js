const { DataTypes } = require('sequelize');   //Importa el tipo de datos de Sequelize
const sequelize = require('../Database/database');   //Importa la instancia de sequelize configurada previamente

//Importa los modelos Cliente y Habitacion para establecer relaciones
const Cliente = require('./cliente');
const Habitacion = require('./habitacion');

//Definimos el modelo Reserva
const Reserva = sequelize.define('reserva', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fechaEntrada: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fechaSalida: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    estado: {
        type: DataTypes.ENUM('confirmada', 'cancelada'),
        allowNull: false,
    },
});

//Establecemos la relación de pertenencia entre Reserva y Cliente
Reserva.belongsTo(Cliente, { foreignKey: 'clienteId', onDelete: 'CASCADE' });   //Una reserva pertenece a un cliente, y si el cliente es eliminado, se eliminará la reserva asociada

//Establecemos la relación de pertenencia entre Reserva y Habitacion
Reserva.belongsTo(Habitacion, { foreignKey: 'habitacionId', onDelete: 'CASCADE' });   //Una reserva pertenece a una habitación, y si la habitación es eliminada, se eliminará la reserva asociada

module.exports = Reserva;   //Exportamos el modelo Reserva para que pueda ser utilizado en otros archivos

