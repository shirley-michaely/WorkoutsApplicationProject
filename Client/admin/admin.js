import angular from 'angular';

import controller from './admin.controller';
import template from './admin.html';

import './admin.less';

angular.module('workouts.controllers')
    .config($stateProvider => {
        $stateProvider
            .state('layout.admin', {
                url: '/admin',
                template,
                controller
            });
    });