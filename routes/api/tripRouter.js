const router = require('express').Router();
const {Traveller,  Location, Trip} = require('../../models');

router.post('/', async (req, res) => {
    try {
      const tripData = await Trip.create({
       trip_budget: req.body.trip_budget,
       traveller_amount: req.body.traveller_amount,
       traveller_id: req.body.traveller_id,
       location_id: req.body.location_id,

      });
      res.status(200).json(tripData);
    } catch (err) {
      res.status(400).json(err);
    }
  });



router.delete('/:id', async (req, res) => {
    try {
      const tripData = await Trip.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!tripData) {
        res.status(404).json({ message: 'No Trip found with that id!' });
        return;
      }
  
      res.status(200).json(tripData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  



module.exports = router;