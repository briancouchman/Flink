'use strict';

<<<<<<< HEAD
angular.module('leeloo').controller('SearchController', function($scope, searchService, profileService){
=======
angular.module('flink').controller('SearchController', function($scope, searchService, profileService){
>>>>>>> FETCH_HEAD

  console.log("Initializing Search controller");

  profileService.getAllProfiles().then(function(profiles){
      $scope.profiles = profiles;
  });
<<<<<<< HEAD
=======

  searchService.getPosition().then(function(position){
    console.log("Position in controller");
    console.log(position);
    $scope.position = position;
  });

>>>>>>> FETCH_HEAD
});
