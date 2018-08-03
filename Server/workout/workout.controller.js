import Workout from './workout.model';
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

