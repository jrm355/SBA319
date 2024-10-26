// sawSchema.mjs
import mongoose from 'mongoose';

const sawSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    }
});

export default mongoose.model('Saw', sawSchema);