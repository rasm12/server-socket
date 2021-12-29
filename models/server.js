
const express   = require('express');
const http      = require('http');
const socketio  = require('socket.io');
const path      = require('path')
const Socket    = require('./sockets')

class Server {

    constructor () {
       
        this.app = express()
        this.port = process.env.PORT;

        // httpserver
        this.server = http.createServer(this.app)


        //configuracion socket
        this.io = socketio(this.server, { /* configuraciones */ });
    }


    middlewares () {
        // directorio publico 
        this.app.use( express.static ( path.resolve( __dirname, '../public' ) ) )
    }

    execute () {

        // init midd
        this.middlewares();

        this.configSockect();

        // init server
        this.server.listen( this.port, () => {
            console.log(`Server corriendo en puerto ${this.port}`)
        })
    }


    configSockect () {
        new Socket(this.io);
    }
}

module.exports = Server;