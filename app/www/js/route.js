'use strict';

angular.module('flink').config(function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  }).when( '/profile', {
    templateUrl: "views/profile.html",
    controller: 'ProfileController'
  }).when( '/search', {
    templateUrl: "views/search.html",
    controller: 'SearchController'
  }).when( '/', {
    templateUrl: "views/home.html",
    controller: 'HomeController'
  }).otherwise({
      redirectTo: '/'
  });
});
