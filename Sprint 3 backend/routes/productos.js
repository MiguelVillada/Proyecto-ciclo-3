const{Router}=require('express');
const router=Router();

const{getProductos, setProducto, actualizarProducto, eliminarProducto}=require('../controllers/productos');

router.get('/listar', getProductos);
router.post('/crear', setProducto);


router.put('/:id', actualizarProducto);


router.delete('/:id', eliminarProducto);

module.exports=router;