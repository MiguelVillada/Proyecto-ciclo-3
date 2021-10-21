const {response}=require('express');
const {validationResult}=require('express-validator');
const Ventasdb = require('../models/Ventasdb');
const mongoose=require('mongoose')
const Venta=require('../models/Ventasdb')




const getVentas=async(req, resp=response)=>{
    const venta=await Venta.find()
    //   .populate('Productos');
resp.status(200).json({
ok:true,
msg: 'Listado de ventas',
venta
});


}
//******************************************************************** */
const setVenta=async (req, resp=response)=>{
    const {Id_Venta, Id_Producto, Valor, Cantidad, Precio_unitario, Fecha, Cliente, Id_Cliente, Vendedor, Estado }=req.body;

    try{
    const venta=new Venta(req.body)
    await venta.save();

    resp.json({
        ok:true,
        msg: 'Venta registrada',
        idv: venta.Id_Ventas,
        idp: venta.Id_Producto,
        valor: venta.Valor,  
        cantidad: venta.Cantidad,
        precio: venta.Precio_unitario,
        fecha: venta.Fecha,
        cliente: venta.Cliente,
        idc: venta.Id_Cliente,
        vendedor: venta.Vendedor,
        estado: venta.Estado

    });

}catch(error){
    console.log(error);
    resp.status(500).json({
        ok:false,
        msg: 'Error al crear la venta'
    })
}

}

//******************************************************************** */
const actualizarVenta=async(req, resp=response)=>{

    const ventaId = req.params.id;

    try {
        
        const venta = await Venta.findById(ventaId);

        if(!venta) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la venta no coincide con ningun elemento en la base de datos',
            });
        }

        const ventaActualizada = await Venta.findByIdAndUpdate(ventaId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Venta actualizada de manera exitosa',
            venta: ventaActualizada
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al actualizar la venta',
        });
    }


}

 
  

    

//******************************************************************** */
const eliminarVenta=async(req, resp=response)=>{
    
    const ventaId = req.params.id;

    try {
        
        const venta = await Venta.findById(ventaId);

        if(!venta) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la centa no coincide con ningun elemento en la base de datos',
            });
        }

        await Venta.findByIdAndDelete(ventaId);

        resp.json({
            ok: true,
            msg: 'Venta eliminada de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al eliminar la venta',
        });
    }
 
}

module.exports={
    getVentas,
    setVenta,
    actualizarVenta,
    eliminarVenta
    
}