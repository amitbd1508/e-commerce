import * as mongoose from 'mongoose';

async function setMongo(): Promise<void> {
  let mongodbURI;

  if (process.env.NODE_ENV === 'test') { // Fixme: move to constrrant
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
  console.log('Connected to MongoDB'); // Fixme: add try error
}

export default setMongo;
