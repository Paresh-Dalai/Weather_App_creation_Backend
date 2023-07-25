

const weatherService = require('../Services/weatherServices');

async function getWeather(req, res) {
  try {
    const location  = req.params.location;
    const weatherData = await weatherService.getWeatherData(location);
    res.send(weatherData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
}

module.exports = {
  getWeather
};