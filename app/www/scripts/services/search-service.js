'use strict';

<<<<<<< HEAD
angular.module('leeloo').factory('searchService', function($q, geolocationService){
  return {

=======
angular.module('flink').factory('searchService', function($q, geolocationService){
  return {
    getPosition: function(){
      return geolocationService.getPosition();
    }
>>>>>>> FETCH_HEAD
  }
});
