//Seed script 

import mongoose from 'mongoose';
import connectDB from '../db/conn.mjs';
import Saw from '../models/sawSchema.mjs';
import FinalDestination from '../models/finalDestinationSchema.mjs';
import { sawMovies } from '../data/sawData.mjs';
import { finalDestinations } from '../data/finalDestinationData.mjs';

async function insertMovieData() {
    await connectDB();
    try {
        await Saw.insertMany(sawMovies);
        console.log('Saw data inserted');

        await FinalDestination.insertMany(finalDestinations);
        console.log('Final Destination data inserted');
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        mongoose.connection.close();
    }
}

insertMovieData();

//node path/to/seedFilmsData.mjs