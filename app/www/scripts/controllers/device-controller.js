'use strict';

angular.module('flink', ['fsPhonegap']).controller('DeviceCtrl', function(){
  DeviceService.ready.then(
      function resolved(resp) {
         $scope.ready = true;
      },
      function rejected(resp){
        throw new Error(resp);
      }
    );
})
