const {response}=require('express');
const {validationResult}=require('express-validator');
const Productosdb = require('../models/Productosdb');
const Producto=require('../models/Productosdb')

const getProductos=async(req, resp=response)=>{
    const productos=await Producto.find()
                     //   .populate('Productos');
    resp.status(200).json({
        ok:true,
        msg: 'Listar producto',
        productos
    });
    
    

}
//******************************************************************** */
const setProducto=async (req, resp=response)=>{
    //const {Identificador, Descripcion, Precio, Estado}=req.body;
   // const {Identificador}=req.body;
    try{
       //let producto =await Producto.findOne({Identificador})
        const producto=new Producto(req.body)
        await producto.save();
    

    resp.json({
        ok:true,
        msg: 'Producto Creado',
        id: producto.Identificador,
        Descripcion: producto.Descripcion,
        Precio:producto.Precio,
        estado: producto.Estado
    });
}catch(error){
    console.log(error);
    resp.status(500).json({
        ok:false,
        msg: 'Error al crear el producto'
    })
}

}

//******************************************************************** */
const actualizarProducto=(req, resp=response)=>{
    resp.json({
        ok:true,
        msg: 'Actualizar producto'
    })

}
//******************************************************************** */
const eliminarProducto=async(req, resp=response)=>{
    const encontrar=await Producto.findOneAndDelete(req.params.Identificacion)
    if(encontrar){
        Producto.remove()
        resp.json({Mensaje: 'Producto borrado'})
    }

}

module.exports={
    getProductos,
    setProducto,
    actualizarProducto,
    eliminarProducto
    
}