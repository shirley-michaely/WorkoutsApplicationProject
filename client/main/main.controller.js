import angular from 'angular';
import workoutAddition from './modals/workout-addition';
import socketIO from 'socket.io-client';

const CONTROLLER = 'mainController';

angular.module('workouts.controllers').controller(CONTROLLER, ($scope, $sce, Workout, LoggedInUser, $mdDialog) => {
    LoggedInUser.ensureUserIsLogged();

    const loggedUser = LoggedInUser.get()._id;

    $scope.workouts = Workout.query();

    const socket = socketIO('http://localhost:8080/');

    socket.on('refresh', () => {
        $scope.workouts = Workout.query();
    });

    Workout.recommended({
        id: loggedUser
    }).$promise
        .then(result => {
            $scope.recomendedWorkout = result;
        });

    $scope.getVideoUrl = workout => $sce.trustAsResourceUrl(workout.video);

    $scope.getSuitableIconDescription = workout => {
        const genderDescription = (workout.gender !== 'Female' && workout.gender !== 'Male')
            ? 'male-female'
            : workout.gender;

        return `mdi mdi-human-${genderDescription} mdi-36px`;
    }

    $scope.openWorkoutAdditionDialog = () => $mdDialog.show({
        controller: workoutAddition.controller,
        template: workoutAddition.template,
        clickOutsideToClose: false
    })
});

export default CONTROLLER;