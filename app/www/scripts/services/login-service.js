'use strict';

angular.module('flink').factory('loginService', function($http, $q, $location, storageService) {
	console.log("Loading loginService");

	var root = "http://ec2-54-68-223-98.us-west-2.compute.amazonaws.com";



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
    authenticate: function(user,pwd){
			console.log(root + '/authenticate/' + user);
      $http.get(root + '/authenticate/' + user)
        .success(function(response) {
          if(response.authenticated){
						console.log("Authentication of " + user + " successfull");
            persistSession({
              authentified: true,
              user: response.user
            });

						console.log("Redirecting to /profile");
            $location.path('/profile');
          }
        }).error(function(response){
          var data = response.data,
            status = response.status,
            header = response.header,
            config = response.config;
            console.log("Error [" + data + "," + status + "," + header + "," + config + "]");
        });
    },

    isAuthentified: function(){
      return readSession().authentified == "true" ? true : false;
    },

    logout: function(){
      console.log("Login service - logout");
      cleanSession();
    }
  }
});
