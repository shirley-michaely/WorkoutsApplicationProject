import angular from 'angular';
import angularResource from 'angular-resource';

const MODULE_NAME = 'workouts.services';

angular.module(MODULE_NAME, [angularResource]);

require('./user.service');
require('./logged-in-user');

export default MODULE_NAME;