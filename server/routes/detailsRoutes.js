const express = require('express');
const WeatherDetails = require('../model/weatherDetails');
const router = express.Router();

// add clicked location weather details
router.post('/api/weatherDetails/new', async (req, res) => {
  const weatherDetailsData = req.body;
  const clickedLocationDetails = new WeatherDetails(req.body);

  try {
    const clickedLocationResult = await clickedLocationDetails.save();
    console.log(clickedLocationResult);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
