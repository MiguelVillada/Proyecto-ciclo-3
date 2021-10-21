const { Schema, model } = require('mongoose');
const VentaSchema=Schema({
    Id_Venta:{
        type: String,
        require:true  ,
        unique:true  
    },

    Id_Producto:{
        type: String,
        required:true, 
         
    },
    Valor:{
        type: Number,
        require:true   
    },
    Cantidad:{
        type: Number,
        require:true  
    },

    Precio_unitario:{
        type: Number,
        require:true  
    },
    Fecha:{
        type: Date,
        require:true  
    },

    Cliente:{
        type: String,
        require:true  
    },
    Id_Cliente:{
        type: String,
        require:true  
    },
    Vendedor:{
        type: String,
        require:true  
    },
    Estado:{
        type: String,
        require:true  
    }

});

module.exports=model('Venta', VentaSchema)