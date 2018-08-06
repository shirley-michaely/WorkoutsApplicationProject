import User from './user.model';
import empty from 'http-reject-empty';

export function index({ query: { term, filter } }) {
  const query = term && filter ? {
    [filter]: new RegExp(term)
  } : {};

  return User.find(query);
}

export function get({ params: { id } }) {
  return User.findById(id)
    .then(empty);
}

export function create({ body }, res) {
    return User.create(body)
        .then(() => {
            res.status(201);

            return Promise.resolve();
        });
}