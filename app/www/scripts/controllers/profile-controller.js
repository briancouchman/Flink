'use strict';

angular.module('flink').controller('ProfileController', function($scope, profileService){

  console.log("Initializing Profile controller");

  var _profile = profileService.getCurrentProfile();

  if(_profile != null){
    $scope.profile = {
      username: _profile.user,
      picture: "http://flink.com.s3-website-us-west-2.amazonaws.com/profiles/" + _profile.user + ".jpg",
      description: _profile.description
    }
    /*$scope.preferences = {
      anal: false,
      partouze: true,
      club: true
    }*/
  }
});
