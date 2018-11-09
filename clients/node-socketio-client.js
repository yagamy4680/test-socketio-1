
var sioc = require('socket.io-client');
var url = process.env['URL'] ? process.env['URL'] : 'http://localhost:7000/tac';

console.log(`trying to connect to ${url}`);

var c = sioc(url)
    .on('connect', () => {
        console.log(`connected to ${url}`);
        setInterval(()=> {
            c.emit('testping', 1, 2, 3);
        }, 5000);
    })
    .on('testpong', (x, y, z) => {
        console.log(`testpong: ${x}, ${y}, ${z}`);
    })
    .on('disconnect', () => {
        console.log(`disconnected from ${url}`);
    });

