import angular from 'angular';

import controller from './event.controller';
import template from './event.html';
import './event.less';
const MODULE_NAME = 'workouts.controllers';

angular.module(MODULE_NAME)
    .config($stateProvider => {
        $stateProvider
            .state('layout.event', {
                url: '/event',
                template,
                controller
            });
    });