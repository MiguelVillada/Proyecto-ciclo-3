const{Router}=require('express');
const router=Router();

const{getUsuarios, setUsuario, actualizarUsuario, eliminarUsuario}=require('../controllers/usuario');

router.get('/listar', getUsuarios);
router.post('/crear', setUsuario);
router.put('/actualizar:Identificacion', actualizarUsuario);
router.delete('/eliminar:Identificacion', eliminarUsuario);

module.exports=router;