


const express = require('express');
const weatherRoutes = require('./Routes/weather.route');
const config = require('./config');
const cors = require("cors")
const expressApp = express();

expressApp.use(express.json());
expressApp.use(cors());

// Routes
expressApp.use('/weather', weatherRoutes);


expressApp.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong.' });
});

// Start the server
expressApp.listen(config.port, () => {
    console.log("Successfully fetching data for getting weather Info.")
  console.log(`Server is running on Port No. : ${config.port}`);
});