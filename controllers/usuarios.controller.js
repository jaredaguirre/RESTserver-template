//      =========        MANTENIENDO SEPARADOS LOS CONTROLADORES DEL ARCHIVO DE RUTAS        ========//
// Esto es importante para que 'res' nos tire las sugerencias que necesitamos
const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    /*
        Un ejemplo de busqueda con Querys!:
        Suponiendo que se hace una llamada a la API con la forma
        GET --> "https://localhost:8080/api/usuarios/?nombre=jared&api_key=1234", 
        Podemos estar seguros que express nos ayuda a parsear los parametros que se pasen como request:
    */
    const query = req.query;

    //Ahora queda incluir ese objeto en la respuesta, y listo! (Recordar que se puede desestructurar)
    res.json({
        msg: 'este es un get a nuestra API',
        query
    })
}

const usuariosPut = (req, res = response) => {

    /*
        Un ejemplo de PUT!:
        Primero observar la sintaxis en el script de rutas. Dice algo
        como '/:id'. Eso significa que luego de la ruta completa (en este caso 'api/usuarios/')
        se grabara el siguiente parametro en una variable id. Y express nos deja tener 
        acceso a ella:
    */
    const id = req.params.id;

    res.json({
        msg: 'hiciste un put a la API',
        id
    })
}

const usuariosPost = (req, res = response) => {

    /*
        Un ejemplo de como se postean datos!
        Llamamos al body de la request ('req') y lo guardamos
        en una variable llamada body. Luego hacemos ese texto parte
        de la respuesta que se manda en el JSON. Para que esto funcione tambien
        se usa el middleware de server.js.

        Algo importante: en los proyectos reales normalmente se desestructura
        el body de la request recibido, ya que siempre hay un filtro y de esa forma
        nos aseguramos de que la respuesta salga unicamente con lo que queremos.
    */
    const body = req.body;
    res.json({
        msg: 'hiciste un post a la API',
        body
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'hiciste un delete a la API'
    })
}

//exportamos todo
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}