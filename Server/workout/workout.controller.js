import _ from 'lodash';
import Workout from './workout.model';
import User from '../user/user.model';
import empty from 'http-reject-empty';

export function index({ query: { term, filter } }) {
    const query = term && filter ? {
        [filter]: new RegExp(term)
    } : {};

    return Workout.find(query);
}

export function get({ params: { id } }) {
    return Workout.findById(id)
        .then(empty);
}

export function create(io) {
    return ({body},res) => Workout.create(body)
        .then(() => {
            res.status(201);
            io.emit('refresh');
            return Promise.resolve();
        });
}

export function update(io) {
    return ({ body, params: { id } }) => Workout.findById(id)
        .then(empty)
        .then(workout =>{
            workout.title = body.title;
            workout.description = body.description;
            workout.author = body.author;
            workout.difficulty = body.difficulty;
            workout.gender = body.gender;
            workout.video = body.video;

            return workout.save();
        })
        .then(() => {
            io.emit('refresh');
        })
        .then(_.noop);
}

export function destroy({ params: { id } }) {
    return Workout.findById(id)
        .then(empty)
        .then(workout => workout.remove())
        .then(_.noop);
}

export function getRecommendedWorkouts({ params: { id } }) {
    return User.findById(id)
        .then(user => Workout.find({})
            .then(result => {
                const userWorkouts = result.filter(x => x.author === `${user.firstname} ${user.lastname}`);

                // Get workouts that match the current user gender but aren't written by him
                const suggestedWorkouts = result.filter(x =>
                    (x.author !== `${user.firstname} ${user.lastname}`) && (x.gender === user.gender || x.gender === 'All Genders'));

                const userWorkoutsDifficulties = userWorkouts.map(({ difficulty }) => difficulty);
                const difficultiesAverage = Math.round(userWorkoutsDifficulties.reduce((a, b) => a + b) / userWorkoutsDifficulties.length);

                // The recommended workout will be the one that matches the user's gender, and has the difficulties average of the user's uploaded workouts
                var recommendedWorkout = suggestedWorkouts.find(x => x.difficulty === difficultiesAverage);
                //recommendedWorkout = suggestedWorkouts[0];
                return recommendedWorkout ? Promise.resolve(recommendedWorkout)
                    : Promise.reject();
            }));
}