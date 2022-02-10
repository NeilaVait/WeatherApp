import axios from 'axios';

export const addNewKeywords = async (dataToSend) => {
  try {
    const ats = await axios.post('http://localhost:4000/api/keywords/new', dataToSend);
    return ats.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addClickedLocationWeatherDetails = async (dataToSend) => {
  try {
    const ats = await axios.post('http://localhost:4000/api/weatherDetails/new', dataToSend);
    return ats.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
