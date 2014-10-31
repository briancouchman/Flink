'use strict';

angular.module('leeloo').factory('geolocationService', function($q){
  return {

    /**
     * Get the geolocation of the device (see http://docs.phonegap.com/en/1.4.1/phonegap_geolocation_geolocation.md.html#geolocation.getCurrentPosition)
     * If the device is not ready, it will throw an error.
     * @return promise
     * @success position the geolocation object (see http://docs.phonegap.com/en/1.4.1/phonegap_geolocation_geolocation.md.html#Position)
     * @error error the error
     */
    getPosition: function(){
    //  if(deviceService.isReady){
        var defer = $q.defer();

        console.log("Querying position ");
        navigator.geolocation.getCurrentPosition(
          function(position){
            console.log("Received position " + position);
            defer.resolve(position);
          },
          function(error) {
            console.log(' Geolocation error: [code: '    + error.code    + '\n' +
                    'message: ' + error.message + ']');
            defer.reject(error);
          }
        )
        return defer.promise;
    //  }else{
    //    throw Error("Device is not ready. Geolocation API is not available");
    //  }
    }
  }
})
