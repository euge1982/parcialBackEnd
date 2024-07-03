/*Archivo que define las rutas relacionadas con el modelo 'Habitacion'
Y las asocia con los metodos del controlador que corresponde*/

const express = require('express');   //Importa Express
const router = express.Router();   //Crea un enrutador
const controlador = require ('../Controllers/habitacionController.js');  //Importa el controlador de habitaciones

/*Las rutas especiales se definen antes que las rutas con parametros, para que Express no tome la ruta 
especial como un parametro dinamico de una ruta con parametro*/

//Rutas para las operaciones especiales
router.get('/disponibles', controlador.getHabitacionesDisponibles);

//Rutas para el CRUD de habitaciones
router.post('/', controlador.createHabitacion);   //Crea una nueva habitacion
router.get('/', controlador.getAllHabitaciones);   //Obtiene todas las habitaciones
router.get('/:id', controlador.getHabitacionById);   //Obtiene la habitacion con un id especifico
router.put('/:id', controlador.updateHabitacionById);   //Actualiza una habitacion con un id dado
router.delete('/:id', controlador.deleteHabitacionById);   //Elimina una habitacion con un id dado

module.exports = router;   //Exporta el enrutador para que sea utilizado en otros modulos