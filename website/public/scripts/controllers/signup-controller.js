'use strict';

angular.module('glidr').controller('SignupController', function($scope, profileService){

    console.log("Initializing Signup controller");

    $scope.profile = {};

    $scope.submitForm = function(isValid){
       // if (isValid) {
            if ($scope.profile.password == $scope.passwordConfirm) {
                profileService.save($scope.profile).then(function(data){
                    console.log("Profile saved");
                })
            }
       // }
    }

    $scope.signup = function(){

       profileService.save({
           username: $scope.profile,
           email: $scope.email,
           sites: $scope.site
       });

       ga('send', 'event', 'app', 'signup');
    }

    $scope.download = function(){


    }

});