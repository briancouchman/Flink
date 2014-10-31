'use strict';

angular.module('leeloo').factory('chatSocket', function (socketFactory) {
    var socket = socketFactory();
    socket.forward('broadcast');
    return socket;
});