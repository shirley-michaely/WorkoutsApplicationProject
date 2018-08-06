import createError from "http-errors";
import {join} from "path";
import user from '../user';
import workout from '../workout';

export default (app, io) => {
    app.use('/api/users', user);
    app.use('/api/workouts', workout);

    // All undefined api routes should return a 404
    app.route('/:url(api/*)')
        .get((req, res, next) => {
            next(createError(404));
        });

// All other routes should redirect to the index.html
    app.route('/*')
        .get((req, res) => res.sendFile(join(__dirname, '..', 'client', 'index.html')));
}

