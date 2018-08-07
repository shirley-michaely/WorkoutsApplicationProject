import angular from 'angular';

const CONTROLLER = 'eventController';

angular.module('workouts.controllers').controller(CONTROLLER, ($scope, $http, Coordinates) => {
    //LoggedInUser.ensureLogged();

    const ApiOpenweathermap = 'http://api.openweathermap.org/data/2.5/forecast/daily';
    const request = {method: 'GET', url: ApiOpenweathermap, params: {
            q: 'Tel Aviv',
            mode: 'json',
            units: 'metric',
            cnt: '3',
            appid: '51382f05320b25f9782e3ce520ca2e19'
        }};

    $http(request)
        .then(response => {
            $scope.weather = response.data.list[0].weather[0].description;
        });

    Coordinates.query().$promise
        .then((result) => {
            $scope.coordinates = result[0];
        });
});

export default CONTROLLER;