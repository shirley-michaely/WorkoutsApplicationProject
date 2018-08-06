import angular from 'angular';

angular.module('workouts.services')
    .factory('Workout', $resource => $resource('/api/workouts/:id/:controller', {
        id: '@_id'
    }, {
    }));