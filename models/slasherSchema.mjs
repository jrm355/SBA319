import mongoose from 'mongoose';

const slasherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    introduced: {
        type: Number,
        required: true
    },
    series: {
        type: String,
        required: true
    },
    films: {
        type: Number,
        required: true
    }
});

// Indexes for efficient searching
slasherSchema.index({ name: 1 });        // search by name
slasherSchema.index({ introduced: 1 });  // search by year
slasherSchema.index({ series: 1 });      // search by series

export default mongoose.model('Slasher', slasherSchema);