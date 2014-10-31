'use strict';

angular.module('leeloo').factory('loginService', function($http, storageService, profileService, Facebook) {
	console.log("Loading loginService");


  var persistSession = function(session){
    storageService.store("session.authentified", session.authentified);
    storageService.store("session.user", session.user);
  }

  var readSession = function(){
    return {
      authentified: storageService.get("session.authentified"),
      user: storageService.get("session.user")
    }
  }

    var cleanSession = function(){
    storageService.clear("session.authentified");
    storageService.clear("session.user");
    }

    return {
        authenticate: function(username, password){
                console.log("login service - authenticate");
                var promise = profileService.authenticateProfile(username, password);
                promise.then(
                    function(profile){
                        console.log("Authentication of " + username + " successfull");
                        this.register(profile);
                    }.bind(this),
                    function(error){
                        console.log(error);
                    }
                )
                return promise;
        },

        register: function(profile){
            persistSession({
                authentified: true,
                user: profile.username
            });
            profileService.registerCurrentProfile(profile);
        },

        isAuthentified: function(){
          return readSession().authentified == "true" ? true : false;
        },

        logout: function(){
            console.log("Login service - logout");
            cleanSession();
            if(profileService.getCurrentProfile().fb){
                Facebook.logout();
            }
            profileService.clearCurrentProfile();
        }
    }
});
