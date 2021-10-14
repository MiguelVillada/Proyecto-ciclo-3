const {response}=require('express');
const {validationResult}=require('express-validator');
const { updateMany } = require('../models/Usuariosdb');
const Usuario=require('../models/Usuariosdb')

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
    const actualizaru=await Usuario.findOneAndUpdate(req.params.Identificacion, {
        Nombre: req.body.Nombre,
        Rol:  req.body.Rol,
        Estado:  req.body.Estado
    }, {useFindAndModify: true, new: true})
        if(actualizaru){
            resp.json({Mensaje: 'Usuario actualizado'})
        }
        else{
            resp.json({Mensaje: 'Usuario  no actualizado'}) 
        }
//Usuario.find
}

 
  

    

//******************************************************************** */
const eliminarUsuario=async(req, resp=response)=>{
    const encontrar=await Usuario.findOneAndDelete(req.params.Identificacion)
    if(encontrar){
        Usuario.remove()
        resp.json({Mensaje: 'Usuario borrado'})
    }
 
}

module.exports={
    getUsuarios,
    setUsuario,
    actualizarUsuario,
    eliminarUsuario
    
}