//Archivo que contiene el CRUD para el modelo 'Cliente'

const Cliente = require("../Models/cliente");

//Crear un nuevo cliente
exports.createCliente = async (req, res) => {
  try {
    const newCliente = {   //Constante que almacena el nuevo cliente
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono,
    };
    const cliente = await Cliente.create(newCliente);   //Crea un nuevo cliente con la constante anterior
    res.status(201).json(cliente);   //Responde con el cliente creado y el código de estado 201 (Creado)
  } 
  catch (err) {
    res.status(500).json({ error: err.message });   //Responde con un error 500 en caso de falla
  }
};

//Obtener todos los clientes
exports.getAllClientes = async (req, res) => {
  try {
    const cliente = await Cliente.findAll();   //Obtiene todos los clientes
    res.status(200).json(cliente);   //Responde con un array de clientes y el código de estado 200 (OK)
  } 
  catch (err) {
    res.status(500).json({ error: err.message });   //Responde con un error 500 en caso de falla
  }
};

//Obtener un cliente por su id
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);   //Obtiene un cliente por su id
    if (cliente) {
      res.status(200).json(cliente);   //Responde con el cliente y el código de estado 200 (OK)
    } 
    else {
      res.status(404).json({ error: 'Cliente no encontrado' });   //Responde con un error 404 si el cliente no existe
    }
  } 
  catch (err) {
    res.status(500).json({ error: err.message });   //Responde con un error 500 en caso de falla
  }
};

//Actualizar un cliente por su id
exports.updateClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id); // Obtiene un cliente por su id
    if (cliente) {
      await cliente.update(req.body); // Actualiza el cliente con los datos del cuerpo de la solicitud
      res.status(200).json(cliente); // Responde con el cliente actualizado y el código de estado 200 (OK)
    } 
    else {
      res.status(404).json({ error: 'Cliente no encontrado' }); // Responde con un error 404 si el cliente no existe
    }
  } 
  catch (err) {
    res.status(500).json({ error: err.message }); // Responde con un error 500 en caso de falla
  }
};

//Eliminar un cliente por su id
exports.deleteClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);   //Obtiene un cliente por su id
    if (cliente) {
      await cliente.destroy();   //Elimina el cliente
      res.status(200).json({   //Responde con el código de estado 204 y un msj de que se elimino el cliente
        message: "Cliente eliminado con éxito"
      }
    )
    }
    else {
      res.status(404).json({ error: 'Cliente no encontrado' });   //Responde con un error 404 si el cliente no existe
    }
  } 
  catch (err) {
    res.status(500).json({ error: err.message });   //Responde con un error 500 en caso de falla
  }
};