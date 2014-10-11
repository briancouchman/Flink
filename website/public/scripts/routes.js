'use strict';

angular.module('glidr').config(function($routeProvider,$locationProvider) {
    $routeProvider.when( '/', {
            templateUrl: "views/home.html",
            controller: 'HomeController'
        })
        .when( '/signup', {
            templateUrl: "views/signup.html",
            controller: 'SignupController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
