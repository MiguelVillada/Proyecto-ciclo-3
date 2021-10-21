const{Router}=require('express');
const router=Router();

const{getVentas, setVenta, actualizarVenta, eliminarVenta, obtenerVenta}=require('../controllers/venta');

router.get('/listar', getVentas);
router.get('/listar/:id', obtenerVenta);
router.post('/crear', setVenta);
router.put('/:id', actualizarVenta);
router.delete('/:id', eliminarVenta);

module.exports=router;