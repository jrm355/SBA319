// routes/sawRoutes.mjs
import express from 'express';
import Saw from '../models/sawSchema.mjs';

const router = express.Router();

// CREATE - Add a new Saw movie
router.post('/', async (req, res) => {
    try {
        const newSaw = new Saw(req.body);
        await newSaw.save();
        res.json(newSaw);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// READ - Get all Saw movies
router.get('/', async (req, res) => {
    try {
        const sawMovies = await Saw.find({});
        res.json(sawMovies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// UPDATE - Edit a Saw movie by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedSaw = await Saw.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedSaw);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// DELETE - Remove a Saw movie by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedSaw = await Saw.findByIdAndDelete(req.params.id);
        res.json(deletedSaw);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

export default router;