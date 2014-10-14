'use strict';

angular.module('glidr').config(function($routeProvider,$locationProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  })
  .when( '/profile', {
    templateUrl: "views/profile.html",
    controller: 'ProfileController',
    resolve: {
      authentified: function(loginService, $location){
        if(!loginService.isAuthentified()){
          $location.path('/login');
        };
      }
    }
  })
  .when( '/profile/:username', {
    templateUrl: "views/profile.html",
    controller: 'ProfileController',
    resolve: {
      authentified: function(loginService, $location){
        if(!loginService.isAuthentified()){
          $location.path('/login');
        };
      }
    }
  })
  .when( '/search', {
    templateUrl: "views/search.html",
    controller: 'SearchController',
    resolve: {
      authentified: function(loginService, $location){
        if(!loginService.isAuthentified()){
          $location.path('/login');
        };
      }
    }
  })
  .when( '/chat', {
      templateUrl: "views/chat.html",
      controller: 'ChatController',
      resolve: {
          authentified: function(loginService, $location){
              if(!loginService.isAuthentified()){
                  $location.path('/login');
              };
          }
      }
  })
  .when( '/', {
    templateUrl: "views/home.html",
    controller: 'HomeController',
    resolve: {
      authentified: function(loginService, $location){
        if(!loginService.isAuthentified()){
          $location.path('/login');
        };
      }
    }
  })
  .when( '/logout', {
    resolve: {
      logout: function(loginService, $location){
        loginService.logout();
        $location.path('/login');
      }
    }
  })
  .otherwise({
      redirectTo: '/'
  });
});
