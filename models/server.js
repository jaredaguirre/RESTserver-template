// ==========       MODELO DE EXPRESS BASADO EN CLASES      ============ //

const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        
        /*
            Middlewares - Añaden funcionalidades al webserver
            Serian funciones que siempre van a ejecutarse cuando inicializamos el servidor
            Normalmente la definicion de la funcion incluye el metodo 'use'
        */
        this.middlewares();
    }
    middlewares() {
        //La instancia de express usa la carpeta 'public' para mostrar contenido estatico
        this.app.use(express.static('public'));

        //CORS
        this.app.use(cors());

        //Con esto indicamos que las peticiones que vengan a tocar el backend estaran en JSON
        this.app.use(express.json());

    }

    //Preparacion de endpoints
    setRoutes() {
        //Como en los proyectos reales, estas rutas siempre estan definidas aparte, aqui hacemos lo mismo
        //Estan guardadas en ./routes/user.routes.js

        this.app.use('/api/usuarios', require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en ' + this.port);
        })
    }
}

//Lo exportamos para compartir este objeto con app.js
module.exports = Server;