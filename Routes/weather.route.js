


const express = require('express');
const weatherController = require('../Controllers/weather.controller');

const router = express.Router();

router.get('/weatherInfo/:location', weatherController.getWeather);

module.exports = router;