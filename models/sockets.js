class Socket {

    constructor (io) {
        this.io = io;
        this.socketEvents();
    }


    socketEvents () {
        this.io.on('connection', ( socket ) => { 
            socket.emit ('mensajeBienvenida', 'Bienvenido! ');
        
            socket.on('MyMessage', data => {
                console.log(JSON.stringify(data))
            });
        
            socket.on('messageClient', data => {
                console.log(`from client: ${data}`)
                
                
                //enviar solo al cliente que envio el mensaje
                //socket.emit('serverChatResponse', data)

                // enviar a todos los clientes conectados
                this.io.emit('serverChatResponse', data)
            });

        });
    }


}


module.exports = Socket