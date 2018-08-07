import angular from 'angular';

angular.module('workouts.services')
    .factory('Workout', $resource => $resource('/api/workouts/:id/:controller', {
        id: '@_id'
    }, {
        recommended: {
            method: 'GET',
            url: 'api/workouts/:id/recommended'
        },
        byUsername: {
            method: 'GET',
            url: 'api/workouts/byUsername',
            isArray: true
        },
    }));