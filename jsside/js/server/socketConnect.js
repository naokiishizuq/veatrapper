var socket = io.connect('http://127.0.0.1', { port: 8081, rememberTransport: false});
   console.log('oi');
   socket.on('connect', function() {
        // sends to socket.io server the host/port of oscServer
        // and oscClient
        socket.emit('config',
            {
                server: {
                    port: 3333,
                    host: '127.0.0.1'
                },
                client: {
                    port: 3334,
                    host: '127.0.0.1'
                }
            }
        );
    });

    socket.on('upload', function(obj) {
        var status = document.getElementById("status");
        status.innerHTML = obj[0];
        console.log(obj);
    });