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

    let weather = null;
    $http(request)
        .then(response => {
            weather = response.data.list[0].weather[0].description;

            var canvas = document.getElementById("weatherCanvas");
            var context = canvas.getContext("2d");
            context.font = "23px Verdana";
            // Create gradient
            var gradient= context.createLinearGradient(0,0,canvas.width,0);
            gradient.addColorStop("0","black");
            gradient.addColorStop("0.5","blue");
            gradient.addColorStop("1.0","green");
            // Fill with gradient
            context.fillStyle = gradient;
            context.fillText("Go running! the weather in Yarkon Park,  Tel Aviv is " + weather  ,0,70);
        });

    Coordinates.query().$promise
        .then((result) => {
            $scope.coordinates = result[0];
        });
});

export default CONTROLLER;