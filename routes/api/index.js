const router = require('express').Router();
const travellerRouter = require('./travellerRouter');
const locationRouter = require('./locationRouter');
const tripRouter = require('./tripRouter');


router.use('/travellers', travellerRouter);
router.use('/location', locationRouter);
router.use('/trips', tripRouter);


module.exports = router;
