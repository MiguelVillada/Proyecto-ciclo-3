const { Schema, model } = require('mongoose');
const UsuarioSchema=Schema({
    Nombre:{
        type: String,
        require:true   
    },

    Identificacion:{
        type: String,
        required:true, 
        unique:true  
    },
    Rol:{
        type: String,
        require:true   
    },
    Estado:{
        type: String,
        require:true  
    }

});

module.exports=model('Usuario', UsuarioSchema)