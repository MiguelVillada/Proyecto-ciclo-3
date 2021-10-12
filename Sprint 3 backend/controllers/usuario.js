const {response}=require('express');

const getUsuarios=(req, resp=response)=>{
    resp.json({
        
        msg: 'Se muestra la lista de usuarios'
    })

}
//******************************************************************** */
const setUsuario=(req, resp=response)=>{
    resp.json({
        
        msg: 'Se ha creado un  nuevo usuario'
    })

}

//******************************************************************** */
const actualizarUsuario=(req, resp=response)=>{
    resp.json({
        
        msg: 'Se ha actualizado un usuario'
    })

}
//******************************************************************** */
const eliminarUsuario=(req, resp=response)=>{
    resp.json({
        
        msg: 'Se ha eliminado un usuario'
    })

}

module.exports={
    getUsuarios,
    setUsuario,
    actualizarUsuario,
    eliminarUsuario
    
}