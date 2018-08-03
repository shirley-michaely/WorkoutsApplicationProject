import 'dotenv-extended/config';
import express from 'express';
import mongoose from 'mongoose';
import mongooseSeeder from './mongoose';
import socketIO from 'socket.io';
import expressConfiguration from './express';

mongooseSeeder(mongoose);

mongoose.connect(process.env.MONGO_DB_PATH)
    .then(() => console.log(`Connected successfully to db: ${process.env.MONGO_DB_PATH}`))
    .catch(() => console.log(`An error occurred while trying to connect to db: ${process.env.MONGO_DB_PATH}`))

const app = express();
const server = app.listen(process.env.PORT);

const socket = socketIO.listen(server);

expressConfiguration(app, socket);

export default app;
