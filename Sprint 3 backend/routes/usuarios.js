const{Router}=require('express');
const router=Router();

const{getUsuarios, setUsuario, actualizarUsuario, eliminarUsuario}=require('../controllers/usuario');

router.get('/listar', getUsuarios);
router.post('/crear', setUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

module.exports=router;