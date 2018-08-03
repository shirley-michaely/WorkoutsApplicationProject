import{seed} from 'mongoose-plugin-seed';

export default mongoose => {
    mongoose.Promise = Promise;

    console.log(`seeding db at ${process.env.MONGO_DB_PATH}`);

    return seed(mongoose)
        .then(() => console.log('DB seed has finished successfully!'))
        .catch(err =>console.log((error) => `Db seed has failed with the following error: ${error}`));
};