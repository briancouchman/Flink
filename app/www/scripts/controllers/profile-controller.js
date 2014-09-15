'use strict';

angular.module('flink').controller('ProfileController', function($scope){

  console.log("Initializing Profile controller");
  $scope.profile = "serialsinners";
  $scope.picture = "/img/profils/" + $scope.profile + ".jpg";
  $scope.preferences = {
    anal: false,
    partouze: true,
    club: true
  }
});
