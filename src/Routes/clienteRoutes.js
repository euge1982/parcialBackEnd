/*Archivo que define las rutas relacionadas con el modelo 'Cliente'
Y las asocia con los metodos del controlador que corresponde*/

const express = require('express');   //Importa Express
const router = express.Router();   //Crea un enrutador
const controlador = require ('../Controllers/clienteController.js');  //Importa el controlador de clientes

//Rutas para el CRUD de clientes
router.post('/', controlador.createCliente);   //Crea un nuevo cliente
router.get('/', controlador.getAllClientes);   //Obtiene todos los clientes
router.get('/:id', controlador.getClienteById);   //Obtiene el cliente con un id especifico
router.put('/:id', controlador.updateClienteById);   //Actualiza un cliente con un id dado
router.delete('/:id', controlador.deleteClienteById);   //Elimina un cliente con un id dado

module.exports = router;   //Exporta el enrutador para que sea utilizado en otros modulos
