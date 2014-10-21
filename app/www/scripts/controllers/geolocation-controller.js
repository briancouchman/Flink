angular.module('glidr').controller('GeolocationController', function($scope, geolocationService, $rootScope) {

    console.log("Initializing Geolocation controller");

    $rootScope.toggle('positionLoading', 'on');
    geolocationService.getPosition().then(function(position){
        $scope.position = position;

        $scope.map.control.refresh({latitude: position.coords.latitude, longitude: position.coords.longitude});

        $rootScope.toggle('positionLoading', 'off');
    });

    $scope.map = {
        center: {
            latitude: 0,
            longitude:  0
        },
        zoom: 11,
        control: {}
    };
});