const {response}=require('express');

const getProductos=(req, resp=response)=>{
    resp.json({
        msg: 'Se muestra la lista de productos'
    })

}
//******************************************************************** */
const setProducto=(req, resp=response)=>{
    resp.json({
        
        msg: 'Se ha creado un producto nuevo'
    })

}

//******************************************************************** */
const actualizarProducto=(req, resp=response)=>{
    resp.json({
        msg: 'Se ha actualizado un producto'
    })

}
//******************************************************************** */
const eliminarProducto=(req, resp=response)=>{
    resp.json({
        
        msg: 'Se ha eliminado un producto'
    })

}

module.exports={
    getProductos,
    setProducto,
    actualizarProducto,
    eliminarProducto
    
}