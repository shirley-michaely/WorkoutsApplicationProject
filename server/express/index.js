import morgan from "morgan";
import {json, urlencoded} from "body-parser";
import {join} from "path";
import cookieParser from "cookie-parser";
import serveStatic from 'serve-static';
import routes from './routes';
import mongooseErrors from 'express-mongoose-errors';
import apiErrorHandler from 'api-error-handler';

export default (app, io) => {
    app.use(morgan('dev'));
    app.use(cookieParser());
    app.use(urlencoded({ extended: false }));
    app.use(json());
    app.use(serveStatic(join(__dirname, '..', '..', 'client')));

    routes(app, io);

    app.use(mongooseErrors());
    app.use(apiErrorHandler());
}
