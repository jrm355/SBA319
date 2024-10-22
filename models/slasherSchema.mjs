import mongoose from 'mongoose'

const slahserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    danger: {
        type: Number,
        required: true
    },
    species: {
        type: String,
        required: true
    }

});

slahserSchema.index({ name: 1 })

export default mongoose.model('Slasher', slahserSchema);