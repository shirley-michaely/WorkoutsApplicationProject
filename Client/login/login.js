import angular from 'angular';

import controller from './login.controller';
import template from './login.html';

angular.module('workouts.controllers')
    .config($stateProvider => {
        $stateProvider
            .state('layout.login', {
                url: '/login',
                template,
                controller
            });
    });