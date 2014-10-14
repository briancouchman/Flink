'use strict';

angular.module('glidr').factory('profileService', function($resource, $q, $http, storageService) {
  console.log("Loading profileService");

  //var server = "http://ec2-54-68-223-98.us-west-2.compute.amazonaws.com";
  var server = "http://localhost:8080";

  var CURRENT_PROFILE = "CURRENT_PROFILE";

  var Profile = $resource(server + '/profiles/:username', {username:'@username'});

  return {
    authenticateProfile: function(_username, _password){
        console.log("profile service - authenticate profile - " + _username + "/" + _password);
        if(/*typeof hex_md5 == "function"*/ false){
            _password = hex_md5(_password);
        }

        return $http.get(server + '/profiles/' + _username + '/authenticate/' + _password)
      //return Profile.get({username:_username, password: _password}).$promise;
    },

    getProfile: function(_username){
      return Profile.get({username:_username}).$promise;
    },

    getAllProfiles: function(_username){
      return Profile.query().$promise;
    },


    registerCurrentProfile: function(profile){
      storageService.store(CURRENT_PROFILE, angular.toJson(profile));
    },

    getCurrentProfile: function(){
      return angular.fromJson(storageService.get(CURRENT_PROFILE));
    },

    clearCurrentProfile :function(){
      storageService.clear(CURRENT_PROFILE);
    }
  }
});
