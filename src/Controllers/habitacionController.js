//Archivo que contiene el CRUD para el modelo 'Habitacion'

const Habitacion = require("../Models/habitacion");
const { Op } = require('sequelize');   //Operadores para consultas avanzadas

//Crear una nueva habitacion
exports.createHabitacion = async (req, res) => {
  try {
    const newHabitacion = {   //Constante que almacena la nueva habitacion
      numero: req.body.numero,
      tipo: req.body.tipo,
      precio: req.body.precio,
      estado: req.body.estado,
    };
    const habitacion = await Habitacion.create(newHabitacion);   //Crea una nueva habitacion con la constante anterior
    res.status(201).json(habitacion);   //Responde con la habitacion creado y el código de estado 201 (Creado)
  } 
  catch (err) {
    res.status(500).json({ error: err.message });   //Responde con un error 500 en caso de falla
  }
};

//Obtener todas las habitaciones
exports.getAllHabitaciones = async (req, res) => {
  try {
    const habitacion = await Habitacion.findAll();   //Obtiene todas las habitaciones
    res.status(200).json(habitacion);   //Responde con un array de habitaciones y el código de estado 200 (OK)
  } 
  catch (err) {
    res.status(500).json({ error: err.message });   //Responde con un error 500 en caso de falla
  }
};

//Obtener una habitacion por su id
exports.getHabitacionById = async (req, res) => {
  try {
    const habitacion = await Habitacion.findByPk(req.params.id);   //Obtiene una habitacion por su id
    if (habitacion) {
      res.status(200).json(habitacion);   //Responde con la habitacion y el código de estado 200 (OK)
    } 
    else {
      res.status(404).json({ error: 'Habitacion no encontrada' });   //Responde con un error 404 si la habitacion no existe
    }
  } 
  catch (err) {
    res.status(500).json({ error: err.message });   //Responde con un error 500 en caso de falla
  }
};

//Actualizar una habitacion por su id
exports.updateHabitacionById = async (req, res) => {
  try {
    const habitacion = await Habitacion.findByPk(req.params.id); // Obtiene una habitacion por su id
    if (habitacion) {
      await habitacion.update(req.body); // Actualiza la habitacion con los datos del cuerpo de la solicitud
      res.status(200).json(habitacion); // Responde con la habitacion actualizado y el código de estado 200 (OK)
    } 
    else {
      res.status(404).json({ error: 'Habitacion no encontrada' }); // Responde con un error 404 si la habitacion no existe
    }
  } 
  catch (err) {
    res.status(500).json({ error: err.message }); // Responde con un error 500 en caso de falla
  }
};

//Eliminar una habitacion por su id
exports.deleteHabitacionById = async (req, res) => {
  try {
    const habitacion = await Habitacion.findByPk(req.params.id);   //Obtiene unahabitacion por su id
    if (habitacion) {
      await habitacion.destroy();   //Elimina la habitacion
      res.status(200).json({   //Responde con el código de estado 204 y un msj de que se elimino la habitacion
        message: "Habitacion eliminada con éxito"
      }
    )
    }
    else {
      res.status(404).json({ error: 'Habitacion no encontrada' });   //Responde con un error 404 si la habitacion no existe
    }
  } 
  catch (err) {
    res.status(500).json({ error: err.message });   //Responde con un error 500 en caso de falla
  }
};

//Obtener las habitaciones disponibles
exports.getHabitacionesDisponibles = async (req, res) => {
    try {
      const habitaciones = await Habitacion.findAll({ where: { estado: 'disponible' } });   //Obtiene las habitaciones que tienen como estado el 'disponible'
      res.status(200).json(habitaciones);   //Muetsra las habitaciones disponibles
    } 
    catch (error) {
      res.status(400).json({ error: error.message });   //Si no manda un msj de error
    }
  };
