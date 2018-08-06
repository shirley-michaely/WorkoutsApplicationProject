import angular from 'angular';

import controller from './register.controller';
import template from './register.html';

angular.module('workouts.controllers')
    .config($stateProvider => {
        $stateProvider
            .state('layout.register', {
                url: '/register',
                template,
                controller
            });
    });