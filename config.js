



require('dotenv').config();


const config = {
  port: process.env.PORT || 5780,
  openWeatherMapApiKey: process.env.OPENWEATHERMAP_API_KEY
};

module.exports = config;