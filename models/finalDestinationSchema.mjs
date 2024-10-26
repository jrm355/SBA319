import mongoose from 'mongoose';

const finalDestinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
});

export default mongoose.model('FinalDestination', finalDestinationSchema);