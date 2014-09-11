'use strict';

angular.module('flink').config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  }).otherwise({
      redirectTo: '/'
  });
});
