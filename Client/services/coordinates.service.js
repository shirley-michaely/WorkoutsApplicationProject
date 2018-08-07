import angular from 'angular';

angular.module('workouts.services')
    .factory('Coordinates', $resource => $resource('/api/coordinates'));