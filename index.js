var net = require('net');

var HOST = "0.0.0.0";
var PORT = 4040;

var server = net.createServer();
server.listen(PORT, HOST);

server.on('connection', function (sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    // sock.write("TCP sending message : 1");
    console.log('Server listening on ' + server.address().address + ':' +
        server.address().port);
    server.on('data', function (chunk) {
        console.log(`Data received from the server: ${chunk.toString()}.`);

        // Request an end to the connection after the data has been received.
        server.end();
    });
}).listen(PORT, HOST);