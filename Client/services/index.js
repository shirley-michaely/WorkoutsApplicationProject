import angular from 'angular';
import angularResource from 'angular-resource';

const MODULE_NAME = 'workouts.services';

angular.module(MODULE_NAME, [angularResource]);

require('./user.service');
require('./logged-in-user');
require('./workout.service');
require('./coordinates.service');

export default MODULE_NAME;