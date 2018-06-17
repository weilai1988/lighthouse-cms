import mongoose from 'mongoose';

// Load schema
require('../schema/user');

const dbPath = 'mongodb://localhost/lighthouse';

const connectFunction = (path) => { mongoose.connect(path); };

const connect = () => {
  mongoose.set('debug', true);
  connectFunction(dbPath);
  mongoose.connection.on('disconnected', () => {
    connectFunction(dbPath);
  });
  mongoose.connection.on('error', (err) => {
    console.error(err);
  });

  mongoose.connection.on('open', async () => {
    console.log('Connected to MongoDB ', dbPath);
  });
};

export default { connect };
