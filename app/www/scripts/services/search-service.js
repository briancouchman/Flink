'use strict';

angular.module('flink').factory('searchService', function($q, geolocationService){
  return {
    getPosition: function(){
      return geolocationService.getPosition();
    }
  }
});
