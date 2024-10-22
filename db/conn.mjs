import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.mongoURI;

export default async function connectDB() {
  try {
    await mongoose.connect(connectionString);
    console.log(`MongoDB Connected...`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
//reconnection logix
mongoose.connection.on('disconnected', () => {
    console.log('Stray Chuckys have been on the loose, reconnecting...');
    connectDB(); 
});
  
//Gracefyk shutdown, no open connection when app is terminated 
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Jason went home for the day, Mongoose connection closed due to app becoming another victim');
    process.exit(0);
  });