module.exports = function (io) {
    'use strict';
    io.on('connection', function (socket) {
        socket.broadcast.emit('user connected');

        socket.on('send:message', function (payload) {
            console.log('received message from', payload.username, 'msg', JSON.stringify(payload.message));

            socket.broadcast.emit('receive:message:', {
                username: payload.username,
                message: payload.message
            });

            io.sockets.emit('broadcast', {
                payload: payload.username,
                source: payload.message
            });
            console.log('broadcast complete');
        });
    });
};