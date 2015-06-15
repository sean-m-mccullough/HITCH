(function (angular) {
    'use strict';

    var hitchApplication = angular.module('hitch');

    hitchApplication.controller('signupController', [
        '$scope', '$log', 'Auth', '$state', '$cordovaToast',
        function ($scope, $log, Auth, $state, $cordovaToast) {
            $log.debug('signupController');

            $scope.createUser = function(user) {
              $scope.message = null;
              $scope.error = null;

              $log.info('User', user);

              Auth.$createUser({
                first_name: user.firstname,
                last_name: user.lastname,
                email: user.email,
                password: user.password
              }).then(function(userData) {
                $log.info("User created with uid: " + userData.uid);
                $scope.message = "User created with uid: " + userData.uid;
                $state.go('app.home');
              }).catch(function(error) {
                $log.info("Error: ", error);
                $scope.error = error;
                var duration = 3000, location = top;

                $cordovaToast.show(error, duration, location)
                  .then(function(success) {
                    console.log("The toast was shown");
                  }, function (err) {
                      console.log("The toast was not shown due to " + err);
                  });
              });

            };
        }
    ]);
}(window.angular));
