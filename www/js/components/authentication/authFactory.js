(function (angular) {
    'use strict';

    var hitchApplication = angular.module('hitch');
        // let's create a re-usable factory that generates the $firebaseAuth instance
    hitchApplication.factory("Auth", ["$firebaseAuth",
      function($firebaseAuth) {
        var ref = new Firebase("https://hitch-architech-2015.firebaseio.com/");
        return $firebaseAuth(ref);
      }
    ]);

}(window.angular));
