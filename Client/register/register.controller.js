import angular from 'angular';

const CONTROLLER = 'registerController';

angular.module('workouts.controllers')
    .controller(CONTROLLER, ($scope, $mdDialog, $state, User, LoggedInUser) => {
        $scope.register = () => User.save($scope.user).$promise
            .then(() => {
                return User.login($scope.user).$promise
                    .then(result => {
                        LoggedInUser.login(result);
                        $state.transitionTo('layout.main', {}, { location: 'replace' });
                    })
            })
            .catch(() => {
                return $mdDialog.show($mdDialog.alert({
                    title: 'Registration Failed',
                    textContent: 'Registration Failed! Please try again',
                    ok: 'Close'
                }));
            });
    });

export default CONTROLLER;