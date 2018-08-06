import angular from 'angular';

const CONTROLLER = 'layoutController';

angular.module('workouts.controllers').controller(CONTROLLER, ($scope, $state, LoggedInUser) => {
    $scope.logout = () => {
        LoggedInUser.logout();
        $state.transitionTo('layout.login', {}, { location: 'replace' });
    };

    LoggedInUser.onLogin(() => {
        $scope.isUserLogged = true;
        const loggedInUser = LoggedInUser.get();
        $scope.usernameToDisplay = loggedInUser.firstname + " " + loggedInUser.lastname;
        $scope.isAdmin = loggedInUser.isadmin;
    });

    LoggedInUser.onLogout(() => {
        $scope.isUserLogged = false;
    });

    $scope.isUserLogged = false;
});

export default CONTROLLER;