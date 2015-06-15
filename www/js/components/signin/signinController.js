(function signinIIFE(angular) {
    'use strict';

    angular
        .module('hitch')
        .controller('SignInController', SignInController);

    SignInController.$inject = ['Auth', '$state'];

    function SignInController(Auth, $state) {

        var vm = this;
        vm.authenticateUser = authenticateUser;

        function authenticateUser(user) {

            $log.deug('authenticateUser click: ', user);

            Auth.$authWithPassword({
                email: user.email,
                password: user.password
            }).then(function signinSuccess(authData) {
                //TODO - Create $cacheFactory for user data
                $log.debug('Auth was successful - ', authData);
                $state.go('app.home');
            }).catch(function signinFail(error) {
                //TODO - Create global error handling provider
                $log.debug('ERROR LOGGING IN - ', error);
            });
        }
    }

}(window.angular));