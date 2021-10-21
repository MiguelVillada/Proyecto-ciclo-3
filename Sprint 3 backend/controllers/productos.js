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
const actualizarProducto=async(req, resp=response)=>{
    const productoId = req.params.id;

    try {
        
        const producto = await Producto.findById(productoId);

        if(!producto) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del producto no coincide con ningun elemento en la base de datos',
            });
        }

        const productoActualizado = await Producto.findByIdAndUpdate(productoId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Producto actualizado de manera exitosa',
            producto: productoActualizado
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el producto',
        });
    }

}
//******************************************************************** */
const eliminarProducto=async(req, resp=response)=>{
    const productoId = req.params.id;

    try {
        
        const producto = await Producto.findById(productoId);

        if(!producto) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del producto no coincide con ningun elemento en la base de datos',
            });
        }

        await Producto.findByIdAndDelete(productoId);

        resp.json({
            ok: true,
            msg: 'Producto eliminado de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el producto',
        });
    }
}

module.exports={
    getProductos,
    setProducto,
    actualizarProducto,
    eliminarProducto
    
}