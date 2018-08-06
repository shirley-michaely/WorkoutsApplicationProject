import angular from 'angular';

angular.module('workouts.services')
    .factory('User', $resource => $resource('/api/users/:id/:controller', {
        id: '@_id'
    }, {
        login: {
            method: 'PUT'
        }
    }));