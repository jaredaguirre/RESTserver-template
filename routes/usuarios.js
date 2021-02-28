// =============        SEPARAMOS LAS RUTAS DE LA CLASE     ============= //

/*
    Tambien se pueden separar los controladores (el callback) para organizar mas
    el codigo. Clase 106, seccion 8
*/

//Traer la funcion Router es importante para que esto funcione:
const { Router } = require('express');
const router = Router();

//Con esto invocamos a los controladores desde el otro archivo en 'controllers'
const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete } = require('../controllers/usuarios.controller')

//Ademas de GET, se pueden hacer peticiones PUT, POST, DELETE. Mirar los 
//siguientes ejemplos:
router.get('/', usuariosGet )

router.put('/:id', usuariosPut )

router.post('/', usuariosPost )

router.delete('/', usuariosDelete )

module.exports = router;