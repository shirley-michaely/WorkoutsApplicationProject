import angular from 'angular';

const CONTROLLER = 'mainController';

angular.module('workouts.controllers').controller(CONTROLLER, ($scope, $sce, Workout, LoggedInUser) => {
    LoggedInUser.ensureUserIsLogged();
    const loggedUser = LoggedInUser.get()._id;

    $scope.workouts = Workout.query();

    Workout.recommended({
        id: loggedUser
    }).$promise
        .then(result => {
            $scope.recomendedWorkout = result;
        });

    $scope.getVideoUrl = workout => $sce.trustAsResourceUrl(workout.video);

    $scope.getSuitableIconDescription = workout => {
        const genderDescription = (workout.gender !== 'Female' && workout.gender !== 'Male')
            ? 'male-female'
            : workout.gender;

        return `mdi mdi-human-${genderDescription} mdi-36px`;
    }
});

export default CONTROLLER;