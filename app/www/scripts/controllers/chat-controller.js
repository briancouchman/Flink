angular.module('leeloo').controller('ChatController', function($scope, socket, profileService){

    console.log("Initializing Chat controller");

    // Socket listeners
    // ================

    $scope.name = "by";

    var currentProfile = profileService.getCurrentProfile();

    socket.on('send:message', function (_username, _message) {
        console.log("send message from " + _username + ":" + _message);
    });

    socket.on('receive:message', function (payload){
        console.log(payload);
        console.log("new message from " + payload.username + " : " + payload.message);
        $scope.messages.push({
            user: payload.username,
            message: payload.message
        });
    })



    $scope.messages = [];

    $scope.sendMessage = function () {
        if(currentProfile.data) {
            username = currentProfile.data.user;
        }else{
            username = currentProfile.user;
        }
        console.log("sendMessage " + $scope.message + "(from " + username + ")");
        socket.emit('send:message', {
            username: username,
            message: $scope.message
        });

        // add the message to our model locally
        $scope.messages.push({
            me: true,
            message: $scope.message
        });

        // clear message box
        $scope.message = '';
    };
});