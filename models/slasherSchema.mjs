import mongoose from 'mongoose'

const slahserSchema = new mongoose.Schema({
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

//Creating indexes
slasherSchema.index({ name: 1 });        //search by name
slasherSchema.index({ introduced: 1 });   //search by year
slasherSchema.index({ series: 1 });     //search by franchise
export default mongoose.model('Slasher', slahserSchema);