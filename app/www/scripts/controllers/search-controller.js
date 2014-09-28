'use strict';

angular.module('flink').controller('SearchController', function($scope, searchService, profileService){

  console.log("Initializing Search controller");

  profileService.getAllProfiles().then(function(profiles){
      $scope.profiles = profiles;
  });

  searchService.getPosition().then(function(position){
    console.log("Position in controller");
    console.log(position);
    $scope.position = position;
  });

});
