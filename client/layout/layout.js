import angular from 'angular';

import controller from './layout.controller';
import template from './layout.html';

import './layout.less';

angular.module('workouts.controllers')
    .config($stateProvider => {
        $stateProvider
            .state('layout', {
                abstract: true,
                template,
                controller
            });
    });