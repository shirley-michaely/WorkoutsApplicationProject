import angular from 'angular';

const workoutLevels = ['Beginner', 'Advanced', 'Expert'];

angular.module('workouts.controllers')
    .filter('level', () => difficulty => {
        if (difficulty <= 3)
        {
            return workoutLevels[0];
        }

        if (difficulty <= 7)
        {
            return workoutLevels[1];
        }

        return workoutLevels[2];
    })