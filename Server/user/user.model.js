import mongoose from 'mongoose';
import { createSeedModel } from 'mongoose-plugin-seed';
import seed from './user.seed';
import mongoosePaginate from 'mongoose-paginate';
import gender from '../../Globals/common-enums';

const { Schema } = mongoose;

const userSchema = new Schema( {
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: gender,
        required: true
    },
    height: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    isadmin: {
        type: Boolean,
        required: false
    }
});

userSchema.plugin(mongoosePaginate);

export default createSeedModel('user', userSchema, seed);