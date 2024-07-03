/*Archivo que define las rutas relacionadas con el modelo 'Reservas'
Y las asocia con los metodos del controlador que corresponde*/

const express = require('express');   //Importa Express
const router = express.Router();   //Crea un enrutador
const controlador = require ('../Controllers/reservaController.js');  //Importa el controlador de reservas

/*Las rutas especiales se definen antes que las rutas con parametros, para que Express no tome la ruta 
especial como un parametro dinamico de una ruta con parametro*/

//Rutas para las operaciones especiales
router.get('/cliente/:clienteId', controlador.getReservasByCliente);
router.get('/entre-fechas', controlador.getReservasEntreFechas); 

//Rutas para el CRUD de Reservas
router.post('/', controlador.createReserva);   //Crea una nueva reserva
router.get('/', controlador.getAllReservas);   //Obtiene todas las reservas
router.get('/:id', controlador.getReservaById);   //Obtiene la reserva con un id especifico
router.put('/:id', controlador.updateReservaById);   //Actualiza una reserva con un id dado
router.delete('/:id', controlador.deleteReservaById);   //Elimina una reserva con un id dado

module.exports = router;   //Exporta el enrutador para que sea utilizado en otros modulos