import mongoose from 'mongoose';
import { createSeedModel } from 'mongoose-plugin-seed';
import seed from './workout.seed';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;

const WorkoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

WorkoutSchema.plugin(mongoosePaginate);

export default createSeedModel('Workout', WorkoutSchema, seed);