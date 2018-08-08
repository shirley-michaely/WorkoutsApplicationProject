import angular from "angular";
import socketIO from "socket.io-client";
import { remove } from 'lodash';
import editWorkout from './modals/edit-workout';

const CONTROLLER = 'adminController';

angular.module('workouts.controllers').controller(CONTROLLER, ($scope, $sce, Workout, LoggedInUser, $mdDialog) => {
    LoggedInUser.ensureUserIsLogged();

    $scope.workouts = Workout.query();

    const socket = socketIO('http://localhost:8080/');

    socket.on('refresh', () => {
        $scope.workouts = Workout.query();
    });

    $scope.getVideoUrl = workout => $sce.trustAsResourceUrl(workout.video);

    $scope.getSuitableIconDescription = workout => {
        const genderDescription = (workout.gender !== 'Female' && workout.gender !== 'Male')
            ? 'male-female'
            : workout.gender;

        return `mdi mdi-human-${genderDescription} mdi-36px`;
    };

    $scope.openEditWorkoutDialog = workout => $mdDialog.show({
        controller: editWorkout.controller,
        template: editWorkout.template,
        clickOutsideToClose: false,
        locals: {
            workout
        }
    });

    $scope.deleteWorkout = workout => {
        Workout.delete({ id: workout._id }).$promise
            .then(() => remove($scope.workouts, ({ _id }) => _id === workout._id))
            .catch(() => {
                return $mdDialog.show($mdDialog.alert({
                    title: 'Delete Failed',
                    textContent: 'Failed to delete the workout. Please try again',
                    ok: 'Close'
                }));
            });

    }
});

export default CONTROLLER;