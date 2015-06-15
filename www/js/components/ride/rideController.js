(function (angular) {
    'use strict';

    var hitchApplication = angular.module('hitch');

    hitchApplication.controller('rideController', [
        '$scope', '$log',
        function ($scope, $log) {
            $log.debug('passengerController');

            $scope.ridesList = {
              start: '21 Iceboat Terrace',
              destination: '70 Bond St',
              startTime: '7:12am',
              pitStops: true,
              noOfPassengers: '4',
              hitched: '2'
            };
        }
    ]);

}(window.angular));
