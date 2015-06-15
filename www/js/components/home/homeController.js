(function (angular) {
    'use strict';

    var hitchApplication = angular.module('hitch');

    hitchApplication.controller('homeController', [
        '$scope', '$log',
        function ($scope, $log) {
            $log.debug('homeController');
        }
    ]);

}(window.angular));
