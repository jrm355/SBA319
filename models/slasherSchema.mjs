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

slahserSchema.index({ name: 1 })

export default mongoose.model('Slasher', slahserSchema);