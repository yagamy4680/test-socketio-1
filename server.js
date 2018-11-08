
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var sio = require('socket.io');

var port = 7000;
var web = express();
var server = http.createServer(web);
var sio_opts = {};
var io = sio(server, sio_opts);
var ioTac = io.of('/tac');

web.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
web.use(bodyParser.json());
web.use(bodyParser.urlencoded({ extended: true }));

ioTac.on('connection', (s) => {
    console.log(`socket.io[tac] incoming connection: ${s.id}`);
    s.on('disconnect', () => {
        console.log(`socket.io[tac] disconnection: ${s.id}`);
    });
});

server.on('listening', () => {
    console.log(`listening port ${port}`);
});
server.listen(port, '0.0.0.0');
