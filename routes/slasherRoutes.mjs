//Import 
import express from 'express';
import slasher from '../models/slasherSchema.mjs'
const router = express.Router();

//CRUD
// create
router.post('/', async (req, res) => {
  try {
    const newSlasher = new slasher(req.body); // Assuming slasher is imported from the schema
    await newSlasher.save();
    res.json(newSlasher);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//Read
router.get('/', async (req, res) => {
    try {
      const allSlashers = await slasher.find({});
  
      res.json(allSlashers);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  });


//Update
router.put('/:id', async (req, res) => {
    try {
      let updatedSlasher = await slasher.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      res.json(updatedSlasher);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  });


//Delete
router.delete('/:id', async (req, res) => {
    try {
      let deletedSlasher = await slasher.findByIdAndDelete(req.params.id);
  
      res.json(deletedSlasher);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  });
  
  export default router;