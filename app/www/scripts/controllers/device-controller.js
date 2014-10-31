'use strict';

<<<<<<< HEAD
angular.module('leeloo', ['fsPhonegap']).controller('deviceCtrl', function(deviceService){
=======
angular.module('flink', ['fsPhonegap']).controller('deviceCtrl', function(deviceService){
>>>>>>> FETCH_HEAD
  deviceService.ready.then(
      function resolved(resp) {
         $scope.ready = true;
      },
      function rejected(resp){
        throw new Error(resp);
      }
    );
})
