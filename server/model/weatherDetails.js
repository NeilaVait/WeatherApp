const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weatherDetailsSchema = new Schema({
  timeStamp: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  phrase: {
    type: String,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
});

const WeatherDetails = mongoose.model('weatherdetail', weatherDetailsSchema);

module.exports = WeatherDetails;
