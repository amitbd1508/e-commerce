import * as mongoose from 'mongoose';

async function setMongo(): Promise<void> {
  let mongodbURI;
  try {
    if (process.env.NODE_ENV === 'test') {
      mongodbURI = process.env.MONGODB_TEST_URI;
    } else {
      mongodbURI = process.env.MONGODB_URI;
    }
    mongoose.Promise = global.Promise;
    mongoose
      .set('useCreateIndex', true)
      .set('useNewUrlParser', true)
      .set('useFindAndModify', false)
      .set('useUnifiedTopology', true);

    // Connect to MongoDB using Mongoose
    await mongoose.connect(mongodbURI);
    console.log('Mongo: Connected to MongoDB');
  } catch (error) {
    console.error('Mongo: Failed to connect MongoDB', error.toString());
  }
}

export default setMongo;
