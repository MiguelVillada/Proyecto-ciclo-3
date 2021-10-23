const { Schema, model } = require('mongoose');
const ProductoSchema=Schema({
    Identificador:{
        type: String,
    },
    Nombre:{
        type: String,
        required:true, 
    },

    Descripcion:{
        type: String,
        required:true, 
          
    },
    Precio:{
        type: String,
        require:true   
    },
    Estado:{
        type: String,
        require:true  
    }

});

module.exports=model('Producto', ProductoSchema)