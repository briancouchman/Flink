'use strict';

angular.module('flink').controller('LoginController', function($scope, loginService, $location){

  console.log("Initializing Login controller");


  $scope.login = function() {
    loginService.authenticate($scope.user.profile,$scope.user.password)
  }
});
