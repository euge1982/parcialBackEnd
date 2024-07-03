//Archivo principal de la aplicacion donde se configura e inicia el servidor

const express = require('express');   //Importa el modulo Express
const app = express();   //Crea una instancia de la aplicacion Express

//Configuracion de Middleware
const cors = require('cors');   //Para habilitar CORS
const morgan = require('morgan');   //Para registrar solicitudes HTTP

const sequelize = require('./src/Database/database');   //Importa la configuración de Sequelize
const clienteRoutes = require('./src/Routes/clienteRoutes');   //Importa las rutas de cliente
const habitacionRoutes = require('./src/Routes/habitacionRoutes');   //Importa las rutas de habitacion
const reservaRoutes = require('./src/Routes/reservaRoutes');   //Importa las rutas de reserva

require('dotenv').config();   //Carga las variables de entorno desde el archivo .env

app.use(cors());   //Habilita CORS para permitir solicitudes desde cualquier origen
app.use(morgan('dev'));   //Usa morgan para registrar las solicitudes HTTP
app.use(express.json());   //Middleware para parsear JSON

app.use('/clientes', clienteRoutes);   //Usa las rutas de clientes
app.use('/habitaciones', habitacionRoutes);   //Usa las rutas de habitacion
app.use('/reservas', reservaRoutes);   //Usa las rutas de reserva


const PORT = process.env.PORT2 || 3000;  //Define el puerto en el que el servidor escuchará las solicitudes, desde el archivo .env

//Sincroniza la base de datos y arranca el servidor
sequelize.sync()   //Sincroniza el modelo con la base de datos
  .then(() => {
    console.log('Database sincronizada exitosamente');
    
    //Inicia el servidor Express para escuchar las solicitudes en el puerto especificado (3000)
    app.listen(PORT, () => {
      console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
    });
  })
  .catch(err => {
    console.error('No se puede conectar a la database:', err);   //Si no se puede conectar a la base de datos, manda el msj de erro
  });

//Definir la ruta para "/"
app.get('/', (req, res) => {
  res.send('Parcial Backend')
});