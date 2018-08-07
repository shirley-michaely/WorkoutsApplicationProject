import angular from 'angular';

import controller from './statistics.controller';
import template from './statistics.html';

import './statistics.less';

angular.module('workouts.controllers')
    .config($stateProvider => {
        $stateProvider
            .state('layout.statistics', {
                url: '/',
                template,
                controller
            });
    });

