'use strict';

angular.module('leeloo').controller('SearchController', function($scope, searchService, profileService){

  console.log("Initializing Search controller");

  profileService.getAllProfiles().then(function(profiles){
      $scope.profiles = profiles;
  });
});
