'use strict';

angular.module('glidr').factory('searchService', function($q, geolocationService){
  return {
    getPosition: function(){
      return geolocationService.getPosition();
    }
  }
});
