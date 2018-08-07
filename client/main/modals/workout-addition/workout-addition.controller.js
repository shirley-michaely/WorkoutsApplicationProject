import angular from 'angular';
import genders from './../../../../Globals/common-enums';
import _ from 'lodash';

const WORKOUT_ADDITION_CONTROLLER = 'workoutAdditionController';

angular.module('workouts.controllers').controller(WORKOUT_ADDITION_CONTROLLER, ($scope, $mdDialog, Workout, LoggedInUser) => {
    const loggedUser = LoggedInUser.get();

    $scope.genders = genders;

    $scope.workout = {
        author: `${loggedUser.firstname} ${loggedUser.lastname}`,
    };

    $scope.addWorkout = () => {
        $scope.workout.date = new Date();

        $scope.workout.video = _.replace($scope.workout.video, "watch?v=", "embed/");

        return Workout.save($scope.workout).$promise
            .then($mdDialog.hide);
    };

    $scope.cancel = $mdDialog.hide;
});

export default WORKOUT_ADDITION_CONTROLLER;