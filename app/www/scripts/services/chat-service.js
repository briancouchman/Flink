'use strict';

angular.module('glidr').factory('chatSocket', function (socketFactory) {
    var socket = socketFactory();
    socket.forward('broadcast');
    return socket;
});