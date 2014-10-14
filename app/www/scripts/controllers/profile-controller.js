'use strict';

angular.module('glidr').controller('ProfileController', function($scope, profileService, $routeParams){

  console.log("Initializing Profile controller");


  var loadProfile = function(profile){
    if(profile != null){
      $scope.profile = {
        username: profile.user,
        picture: "http://flink.com.s3-website-us-west-2.amazonaws.com/profiles/" + profile.user + ".jpg",
        description: profile.description
      }
      /*$scope.preferences = {
        anal: false,
        partouze: true,
        club: true
      }*/
    }
  }


  var profileParam = $routeParams.username;
  if(typeof profileParam !== "undefined"){
    profileService.getProfile(profileParam).then(function(_profile){
      loadProfile(_profile);
    });
  }else{
    loadProfile(profileService.getCurrentProfile());
  }




});
