//Archivo que contiene el CRUD para el modelo 'Reserva'

const Reserva = require("../Models/reserva");
const { Op } = require('sequelize');   //Operadores para consultas avanzadas

//Crear una nueva reserva
exports.createReserva = async (req, res) => {
  try {
    const newReserva = {   //Constante que almacena la nueva reserva
      clienteId: req.body.clienteId,
      habitacionId: req.body.habitacionId,
      fechaEntrada: req.body.fechaEntrada,
      fechaSalida: req.body.fechaSalida,
      estado: req.body.estado,
    };
    const reserva = await Reserva.create(newReserva);   //Crea una nueva reserva con la constante anterior
    res.status(201).json(reserva);   //Responde con la reserva creada y el código de estado 201 (Creado)
  } 
  catch (err) {
    res.status(500).json({ error: err.message });   //Responde con un error 500 en caso de falla
  }
};

//Obtener todas las reservas
exports.getAllReservas = async (req, res) => {
  try {
    const reserva = await Reserva.findAll();   //Obtiene todas las reservas
    res.status(200).json(reserva);   //Responde con un array de reservas y el código de estado 200 (OK)
  } 
  catch (err) {
    res.status(500).json({ error: err.message });   //Responde con un error 500 en caso de falla
  }
};

//Obtener una reserva por su id
exports.getReservaById = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);   //Obtiene una reserva por su id
    if (reserva) {
      res.status(200).json(reserva);   //Responde con la reserva y el código de estado 200 (OK)
    } 
    else {
      res.status(404).json({ error: 'Reserva no encontrada' });   //Responde con un error 404 si la reserva no existe
    }
  } 
  catch (err) {
    res.status(500).json({ error: err.message });   //Responde con un error 500 en caso de falla
  }
};

//Actualizar una reserva por su id
exports.updateReservaById = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id); // Obtiene una reserva por su id
    if (reserva) {
      await reserva.update(req.body); // Actualiza la reserva con los datos del cuerpo de la solicitud
      res.status(200).json(reserva); // Responde con la reserva actualizado y el código de estado 200 (OK)
    } 
    else {
      res.status(404).json({ error: 'Reserva no encontrado' }); // Responde con un error 404 si la reserva no existe
    }
  } 
  catch (err) {
    res.status(500).json({ error: err.message }); // Responde con un error 500 en caso de falla
  }
};

//Eliminar una reserva por su id
exports.deleteReservaById = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);   //Obtiene una reserva por su id
    if (reserva) {
      await reserva.destroy();   //Elimina la reserva
      res.status(200).json({   //Responde con el código de estado 204 y un msj de que se elimino la reserva
        message: "Reserva eliminada con éxito"
      }
    )
    }
    else {
      res.status(404).json({ error: 'Reserva no encontrada' });   //Responde con un error 404 si la reserva no existe
    }
  } 
  catch (err) {
    res.status(500).json({ error: err.message });   //Responde con un error 500 en caso de falla
  }
};

//Obtener las reservas de un cliente
exports.getReservasByCliente = async (req, res) => {
    try {
      const reservas = await Reserva.findAll({ where: { clienteId: req.params.clienteId } });   //Obtiene las reservas que estan con el id de un cliente dado
      res.status(200).json(reservas);   //Muestra las reservas obtenidas
    } 
    catch (error) {
      res.status(400).json({ error: error.message });   //Responde con un error
    }
  };
  
  //Obtener las reservas entre las fechas dadas
  exports.getReservasEntreFechas = async (req, res) => {
    const { fechaInicio, fechaFin } = req.query;   //Toma las fechas de inicio y de fin, para consultar las reservas entre esas fechas
    try {
      const reservas = await Reserva.findAll({
        where: {
          fechaEntrada: {
            [Op.between]: [new Date(fechaInicio), new Date(fechaFin)],
          },
        },
      });
      res.status(200).json(reservas);   //Muestra las reservas obtenidas
    } 
    catch (error) {
      res.status(400).json({ error: error.message });   //Muestra un error
    }
  };