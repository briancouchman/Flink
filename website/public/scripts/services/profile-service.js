'use strict';

angular.module('glidr').factory('profileService', function($resource) {
    console.log("Loading profileService");

    //var server = "http://ec2-54-68-223-98.us-west-2.compute.amazonaws.com";
    var server = "http://localhost:8080";

    var Profile = $resource(server + '/profiles');

    return {
        save: function(profile){
            return Profile.save(profile).$promise;
        }
    }
});
