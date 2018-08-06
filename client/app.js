import angular from 'angular';
import angularMaterial from 'angular-material';
import 'angular-moment';
import uiRouter from 'angular-ui-router';
import 'mdi/css/materialdesignicons.css';
import 'angular-material/angular-material.css';
import controllers from './controllers';
import services from './services';

import './style.less';

angular.module('workouts', [
    angularMaterial,
    uiRouter,
    'angularMoment',
    'ngAnimate',
    controllers,
    services
])
    .config(($urlRouterProvider, $locationProvider, $mdThemingProvider) => {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                default: '500'
            })
            .warnPalette('blue-grey', {
                default: '900',
                'hue-1': '50'
            })
            .accentPalette('amber', {
                default: '400',
                'hue-1': '600'
            });

        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    })
    .run(amMoment => {
        amMoment.changeLocale('en');
    });