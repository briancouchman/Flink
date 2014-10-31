'use strict';

angular.module('leeloo').config(function(FacebookProvider) {
    // Set your appId through the setAppId method or
    // use the shortcut in the initialize method directly.
    console.log("Initializing Facebook app");
    FacebookProvider.init({
        appId: '488985987908003',
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        xfbml      : true  // parse XFBML
    });
});

angular.module('leeloo').controller('LoginController', function($scope, $location, loginService, profileService, Facebook){

    console.log("Watch Facebook");
    $scope.$watch(function() {
        // This is for convenience, to notify if Facebook is loaded and ready to go.
        return Facebook.isReady();
    }, function(newVal) {
        // You might want to use this to disable/show/hide buttons and else
        $scope.facebookReady = true;
    });

    console.log("Initializing Login controller");


    $scope.loginFB = function(){
        Facebook.login(function(response) {
            if (response.status == 'connected') {
                $scope.fbLogged = true;
                $scope.me();
            }
        });
    }

    $scope.getFBLoginStatus = function() {
       Facebook.getLoginStatus(function(response) {
            if(response.status === 'connected') {
                $scope.fbLogged = true;
            } else {
                $scope.fbLogged = false;
            }
        });
    };

<<<<<<< HEAD
    $scope.me = function() {
       Facebook.api('/me', function(response) {
           var fbuser = response;
           profileService.getProfileFb(fbuser.id).then(function(profile){
               console.log("Facebook user " + profile.username + " authenticated");
               profile.fb = true;
               loginService.register(profile);
               console.log("Facebook user " + profile.username + " registered");
               console.log("Redirecting to profile");
               $location.path("/profile");
           });
        });
    };


    $scope.login = function() {
=======
  $scope.login = function() {
>>>>>>> FETCH_HEAD
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


    $scope.logout = function() {
        loginService.logout();
    }
});
