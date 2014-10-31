'use strict';

angular.module('leeloo', ['fsPhonegap']).controller('deviceCtrl', function(deviceService){
  deviceService.ready.then(
      function resolved(resp) {
         $scope.ready = true;
      },
      function rejected(resp){
        throw new Error(resp);
      }
    );
})
