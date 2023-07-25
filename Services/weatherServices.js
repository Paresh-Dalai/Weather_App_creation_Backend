


const axios = require("axios");

  const getWeatherData = async function (location) {
  const weather_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6f5b32626e889a442f05abbd186d98ab&units=metric`;

  try {
    const response = await axios.get(weather_URL);
    return {
      location: response.data.name,
      weather: response.data.weather[0].main,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity
    };
  } catch (err) {
    throw new Error('Failed to fetch weather data from the API.');
  }
}

module.exports = {getWeatherData};