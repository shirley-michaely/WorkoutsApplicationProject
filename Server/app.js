import 'dotenv-extended/config';
import express from 'express';
import {join} from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { urlencoded, json } from 'body-parser';
import index from '../routes/index';
import createError from "http-errors";

const app = express();
const server = app.listen(process.env.PORT);

// express configurations
app.use(morgan('dev'));
app.use(cookieParser());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(express.static(join(__dirname, 'client')));

// All undefined api routes should return a 404
app.route('/:url(api/*)')
    .get((req, res, next) => {
        next(createError(404));
    });

// All other routes should redirect to the index.html
app.route('/*')
    .get((req, res) => res.sendFile(join(__dirname, '..', 'client', 'index.html')));

export default app;
