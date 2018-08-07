import mongoose from 'mongoose';
import {createSeedModel} from 'mongoose-plugin-seed';
import seed from './coordinates.seed';
import mongoosePaginate from 'mongoose-paginate';

const {Schema} = mongoose;

const coordinatesSchema = new Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
});

coordinatesSchema.plugin(mongoosePaginate);

export default createSeedModel('coordinates', coordinatesSchema, seed);