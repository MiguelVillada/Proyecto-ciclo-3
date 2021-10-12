const express=require('express');
//const {dbConnection}=require('./database/config');
require('dotenv').config();


const app=express();
//dbConnection();


app.use(express.static('public'));
app.use(express.json()); 

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/productos', require('./routes/productos'));


//Levantar el servidor
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo por el puerto ${process.env.PORT}`)
})