
var sioc = require('socket.io-client');
var url = process.env['URL'] ? process.env['URL'] : 'http://localhost:7000/tac';

console.log(`trying to connect to ${url}`);

var c = sioc(url)
    .on('connect', () => {
        console.log(`connected to ${url}`);
    })
    .on('disconnect', () => {
        console.log(`disconnected from ${url}`);
    });

