'use strict';

angular.module('flink').controller('SearchController', function($scope, profileService){

  console.log("Initializing Search controller");
  
  profileService.getAllProfiles().then(function(profiles){
      $scope.profiles = profiles;
  });



});
