import angular from 'angular';

const CONTROLLER = 'loginController';

angular.module('workouts.controllers')
    .controller(CONTROLLER, ($scope, $state, $mdDialog, User, LoggedInUser) => {
        $scope.user = {};

        $scope.login = () => {
            return User.login($scope.user).$promise
                .then(result => {
                    LoggedInUser.login(result);
                    $state.transitionTo('layout.main', {}, { location: 'replace' });
                })
                .catch(() => {
                    return $mdDialog.show($mdDialog.alert({
                        title: 'Login Failed',
                        textContent: 'Login Failed! Please try again later',
                        ok: 'Close'
                    }));
                });
        };
    });

export default CONTROLLER;