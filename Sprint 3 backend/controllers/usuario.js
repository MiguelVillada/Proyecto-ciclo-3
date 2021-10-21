const {response}=require('express');
const {validationResult}=require('express-validator');
const Usuariosdb = require('../models/Usuariosdb');
//const { updateMany } = require('../models/Usuariosdb');
const mongoose=require('mongoose')
const Usuario=require('../models/Usuariosdb')
/********************************************* */
const parseId=(Id)=>{
    return mongoose.Types.ObjectId(Id)
}

/******************************************* */



const getUsuarios=async(req, resp=response)=>{
    const usuario=await Usuario.find()
    //   .populate('Productos');
resp.status(200).json({
ok:true,
msg: 'Lista de Usuarios',
usuario
});


}
//******************************************************************** */
const setUsuario=async (req, resp=response)=>{
    const {Nombre, Identificacion, Rol, Estado}=req.body;

    try{
    const usuario=new Usuario(req.body)
    await usuario.save();

    resp.json({
        ok:true,
        msg: 'Usuario Creado',
        id: usuario.Identificacion,
        nombre: usuario.Nombre,
        rol: usuario.Rol,
        estado: usuario.Estado
    });
}catch(error){
    console.log(error);
    resp.status(500).json({
        ok:false,
        msg: 'Error al crear el usuario'
    })
}

}

//******************************************************************** */
const actualizarUsuario=async(req, resp=response)=>{

    const usuarioId = req.params.id;

    try {
        
        const usuario = await Usuario.findById(usuarioId);

        if(!usuario) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del usuario no coincide con ningun elemento en la base de datos',
            });
        }

        const usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Usuario actualizado de manera exitosa',
            usuario: usuarioActualizado
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el usuario',
        });
    }


}

 
  

    

//******************************************************************** */
const eliminarUsuario=async(req, resp=response)=>{
    
    const usuarioId = req.params.id;

    try {
        
        const usuario = await Usuario.findById(usuarioId);

        if(!usuario) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del usuario no coincide con ningun elemento en la base de datos',
            });
        }

        await Usuario.findByIdAndDelete(usuarioId);

        resp.json({
            ok: true,
            msg: 'Usuario eliminado de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el usuario',
        });
    }
 
}

module.exports={
    getUsuarios,
    setUsuario,
    actualizarUsuario,
    eliminarUsuario
    
}