


const axios = require("axios");

  const getWeatherData = async function (location) {
  const weather_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6f5b32626e889a442f05abbd186d98ab&units=metric`;

  try {
    console.log("URL" , weather_URL)
    const response = await axios.get(weather_URL);
    console.log("data" , response.data)
    return {
      location: response.data.name,
      weather: response.data.weather[0].main,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      visibility : response.data.visibility,
      feels_like : response.data.main.feels_like,
      country_code : response.data.sys.country,
    };
  } catch (err) {
    throw new Error('Failed to fetch weather data from the API.');
  }
}

module.exports = {getWeatherData};