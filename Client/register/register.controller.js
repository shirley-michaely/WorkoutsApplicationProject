import angular from 'angular';

const CONTROLLER = 'registerController';

angular.module('workouts.controllers')
    .controller(CONTROLLER, ($scope, $mdDialog, $state, User) => {
        $scope.register = () => User.save($scope.user).$promise
            .then(() => {
                //todo: make the login in here and move to main page
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