const router = require('express').Router();
const {Traveller,  Location, Trip} = require('../../models');


router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll();
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id);

    if (!travellerData) {
      res.status(404).json({ message: 'No travller found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const travellerData = await Traveller.create({
      name: req.body.name,
      email: req.body.email
    });
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
