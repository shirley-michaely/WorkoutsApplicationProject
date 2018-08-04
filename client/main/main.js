import angular from 'angular';

import controller from './main.controller';
import template from './main.html';

import './main.less';

angular.module('workouts.controllers')
    .config($stateProvider => {
      $stateProvider
            .state('layout.main', {
              url: '/',
              template,
              controller
            });
    });