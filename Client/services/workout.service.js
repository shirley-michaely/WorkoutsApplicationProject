import angular from 'angular';

angular.module('workouts.services')
    .factory('Workout', $resource => $resource('/api/workouts/:id/:controller', {
        id: '@_id'
    }, {
        recommended: {
            method: 'GET',
            url: 'api/workouts/:id/recommended'
        },
        workoutsByGender: {
            method: 'GET',
            url: 'api/workouts/workoutsByGender',
            isArray: true
        },
    }));