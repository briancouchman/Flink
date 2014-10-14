angular.module('fsPhonegap', [])
.service('deviceService', ['$document', '$timeout', '$window',  '$q',
  function($document, $timeout, $window, $q) {
    console.log("Initailizing device service");


    var defer = $q.defer();

    this.isReady = false;

    defer.promise.then(
      function resolved(resp) {
         this.isReady = true;
      }.bind(this),
      function rejected(resp){
        throw new Error(resp);
      }
    )

    // Backup in the case that we did not received the event
    // This seemed to be necessary with some versions of Cordova
    // when testing via 'cordova serve' in a web browser
    // but when on-device the event is received correctly
    var timoutPromise = $timeout(function() {
      if ($window.cordova){
        defer.resolve($window.cordova);
      } else {
        defer.reject("Cordova failed to load");
      }
    }, 1200);

    angular.element($document)[0].addEventListener('deviceready', function() {
      $timeout.cancel(timoutPromise);
      defer.resolve($window.cordova);
    });
  }
]);
