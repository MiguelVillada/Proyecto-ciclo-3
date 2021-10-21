const express=require('express');
const cors = require('cors');
//const {dbConnection}=require('./database/config');
require('dotenv').config();
const {dbConnection}=require('./database/config');


const app=express();

//Levanta la conexion
dbConnection();


app.use(express.static('public'));
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/productos', require('./routes/productos'));
app.use('/api/ventas', require('./routes/ventas'));


//Levantar el servidor
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo por el puerto ${process.env.PORT}`)
})