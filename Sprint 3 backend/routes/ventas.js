const{Router}=require('express');
const router=Router();

const{getVentas, setVenta, actualizarVenta, eliminarVenta}=require('../controllers/venta');

router.get('/listar', getVentas);
router.post('/crear', setVenta);
router.put('/:id', actualizarVenta);
router.delete('/:id', eliminarVenta);

module.exports=router;