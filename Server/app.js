import 'dotenv-extended/config';
import express from 'express';
import {join} from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { urlencoded, json } from 'body-parser';

import index from '../routes/index';

const app = express();
const server = app.listen(3000);

// express configurations
app.use(morgan('dev'));
app.use(cookieParser());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(express.static(join(__dirname, 'client')));


app.use('/', index);

app.set('view engine', 'jade');
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

export default app;
