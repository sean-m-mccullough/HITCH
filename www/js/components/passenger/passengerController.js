(function (angular) {
    'use strict';

    var hitchApplication = angular.module('hitch');

    hitchApplication.controller('passengerController', [
        '$scope', '$log',
        function ($scope, $log) {
            $log.debug('passengerController');

            $scope.ridesList = [
              {
                start: '21 Iceboat Terrace',
                destination: '70 Bond St',
                startTime: '7:12am',
                pitStops: true,
                noOfPassengers: '4',
              },
              {
                start: '33 Iceboat Terrace',
                destination: '70 Bond St',
                startTime: '8:12am',
                pitStops: true,
                noOfPassengers: '4',
              },
              {
                start: '705 College St.',
                destination: '70 Bond St',
                startTime: '9:12am',
                pitStops: true,
                noOfPassengers: '4',
              },
              {
                start: '69 East Liberty St',
                destination: '70 Bond St',
                startTime: '10:12am',
                pitStops: true,
                noOfPassengers: '4',
              },
              {
                start: '5 Mariner Terrace',
                destination: '70 Bond St',
                startTime: '11:12am',
                pitStops: true,
                noOfPassengers: '4',
              },
            ];
        }
    ]);

}(window.angular));
