'use strict';

angular.module('flink').controller('LoginController', function($scope, $location, loginService, profileService){

  console.log("Initializing Login controller");


  $scope.login = function() {
    console.log("login controller - login");
    loginService.authenticate($scope.user.profile,$scope.user.password)
      .then(
        function(profile){
          if(typeof profile !== "undefined"){
            console.log(profile.user + " authenticated");

            profileService.registerCurrentProfile(profile);

            $location.path("/profile");
          }
        },
        function(error){
          $scope.errorMessage = error;
          console.log(error);
        }
      );
  }
});
