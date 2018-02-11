const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlATTRIBUTELIST = require ('../controllers/ctrlATTRIBUTELIST');
const ctrlMeaning = require ('../controllers/ctrlMeaning');


// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/features', ctrlATTRIBUTELIST.attributes);
router.get('/sitepurpose', ctrlMeaning.purpose);

module.exports = router;
