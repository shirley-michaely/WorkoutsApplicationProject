import angular from 'angular';
import genders from './../../../../Globals/common-enums';
import _ from 'lodash';

const EDIT_WORKOUT_CONTROLLER = 'editWorkoutController';

angular.module('workouts.controllers').controller(EDIT_WORKOUT_CONTROLLER, ($scope, $mdDialog, Workout, LoggedInUser, workout) => {
    $scope.genders = genders;
    $scope.workout = workout;

    $scope.saveWorkout = () => {
        $scope.workout.date = new Date();
        $scope.workout.video = _.replace($scope.workout.video, "watch?v=", "embed/");

        Workout.update({ id: workout._id }, $scope.workout).$promise
            .then(() => $mdDialog.hide())
            .catch(() => {
                return $mdDialog.show($mdDialog.alert({
                    title: 'Save Failed',
                    textContent: 'Failed to save the workout. Please try again',
                    ok: 'Close'
                }));
            });
    };

    $scope.cancel = $mdDialog.hide;
});

export default EDIT_WORKOUT_CONTROLLER;