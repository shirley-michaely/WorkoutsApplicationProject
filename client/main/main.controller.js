import angular from 'angular';

const CONTROLLER = 'mainController';

angular.module('workouts.controllers').controller(CONTROLLER, ($scope, $sce, Workout, LoggedInUser) => {
    LoggedInUser.ensureUserIsLogged();

    $scope.workouts = Workout.query();

    $scope.getVideoUrl = workout => $sce.trustAsResourceUrl(workout.video);

    $scope.getSuitableIconDescription = workout => {
        const genderDescription = workout.gender !== 'Female' && workout.gender !== 'Male' ? 'male-female' : workout.gender;

        return `mdi mdi-human-${genderDescription} mdi-36px`;
    }
});

export default CONTROLLER;