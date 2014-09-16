'use strict';

angular.module('flink').factory('profileService', function($resource, storageService) {
  console.log("Loading profileService");

  var CURRENT_PROFILE = "CURRENT_PROFILE";

  var Profile = $resource('http://ec2-54-68-223-98.us-west-2.compute.amazonaws.com/profiles/:username/:password', {username:'@username', password: '@password'}, {
    authenticate: {method: 'GET'}
  });

  return {
    authenticateProfile: function(_username, _password){
      if(typeof hex_md5 == "function"){
        _password = hex_md5(_password);
      }
      return Profile.get({username:_username, password: _password}).$promise;
    },

    getProfile: function(_username){
      return Profile.get({username:_username}).$promise;
    },

    getAllProfiles: function(_username){
      return Profile.get().$promise;
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
