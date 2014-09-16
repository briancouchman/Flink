'use strict';

angular.module('flink').controller('LoginController', function($scope, $location, loginService, profileService){

  console.log("Initializing Login controller");


  $scope.login = function() {
    loginService.authenticate($scope.user.profile,$scope.user.password)
      .then(
        function(profile){
          console.log(profile.user + " authenticated");

          profileService.registerCurrentProfile(profile);

          $location.path("/profile");
        },
        function(error){
          console.log(error);
        }
      );
  }
});
