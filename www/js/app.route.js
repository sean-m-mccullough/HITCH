(function(angular) {
    'use strict';


    angular
        .module('hitch')
        .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

            $stateProvider
                .state('app', {
                    url: "/app",
                    abstract: true,
                    templateUrl: "js/shared/sidebar/sidebarView.html",
                })
                // signup view
                .state('signup', {
                    url: '/signup',
                    templateUrl: 'js/components/signup/signupView.html',
                    controller: 'signupController'
                })
                // signin view
                .state('signin', {
                    url: '/signin',
                    templateUrl: 'js/components/signin/signinView.html',
                    controllerAs: 'vm',
                    controller: 'SignInController'
                })
                // home view
                .state('app.home', {
                    url: "/home",
                    views: {
                        'menuContent': {
                            templateUrl: "js/components/home/homeView.html",
                            controller: "homeController"
                        }
                    }
                })
                // passenger view
                .state('app.passenger', {
                    url: "/passenger",
                    views: {
                        'menuContent': {
                            templateUrl: "js/components/passenger/passengerView.html",
                            controller: "passengerController"
                        }
                    }
                })
                // passenger view
                .state('app.ride', {
                    url: "/ride",
                    views: {
                        'menuContent': {
                            templateUrl: "js/components/ride/rideView.html",
                            controller: "rideController"
                        }
                    }
                })
                //driver view
                .state('app.driver', {
                    url: '/driver',
                    views: {
                        'menuContent': {
                            templateUrl: 'js/components/driver/driverView.html',
                            controller: 'driverController'
                        }
                    }
                });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/signup');
        })
        .run(function($ionicPlatform, $rootScope, $cordovaSplashscreen, $state) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }

                // setTimeout(function() {
                //     $cordovaSplashscreen.hide();
                // }, 5000);
            });
        });
}(window.angular));
