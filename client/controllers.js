import angular from 'angular';

const CONTROLLERS_MODULE = 'workouts.controllers';

angular.module(CONTROLLERS_MODULE, []);

require('./layout/layout');
require('./main/main');
require('./register/register');
require('./login/login');
require('./statistics/statistics');
require('./event/event');
require('./filters/index');

export default CONTROLLERS_MODULE;