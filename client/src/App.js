import GlobalStyles from './components/styles/Global';
import { Route, Routes } from 'react-router-dom';
import WeatherDetails from './pages/WeatherDetails';
import Home from './pages/Home';
import { useState } from 'react';
import axios from 'axios';
import { addClickedLocationWeatherDetails, addNewKeywords } from './utils/requests';

const regex = new RegExp('^[a-zA-Z0-9 ]*$');

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [locations, setLocations] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [currLocationName, setCurrLocationName] = useState('');

  const prepareLocationOptions = (url, params) => {
    return {
      method: 'GET',
      url: url,
      params: params,
      headers: {
        'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
        'x-rapidapi-key': '0c96805936msh02902f9b20d2ff0p156b73jsn7f9f9dd6fb14',
      },
    };
  };

  const handleSearch = (e) => {
    if (validateInput(e.target.value) === false) return;
    setSearchValue(e.target.value);
    getLocationsBySearchValue(e.target.value);
  };

  const getLocationsBySearchValue = (value) => {
    axios
      .request(prepareLocationOptions(`https://foreca-weather.p.rapidapi.com/location/search/${value}`, { lang: 'en' }))
      .then((response) => {
        const locationsFound = response.data.locations.slice(0, 5);
        setLocations(locationsFound);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const validateInput = (value) => {
    if (!regex.test(value)) {
      setErrorMsg('Search term can only contain letters, numbers and spaces');
      return false;
    } else {
      setErrorMsg('');
    }
  };

  const getCurrentWeather = (id) => {
    axios
      .request(
        prepareLocationOptions(`https://foreca-weather.p.rapidapi.com/current/${id}`, {
          tempunit: 'C',
          windunit: 'MS',
          lang: 'en',
        })
      )
      .then((response) => {
        setCurrentWeather(response.data);
        handleCreateNewWeatherDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const setIdInStorage = (id) => {
    localStorage.setItem('locationId', id.toString());
  };

  const getForecast = (id) => {
    axios
      .request(
        prepareLocationOptions(`https://foreca-weather.p.rapidapi.com/forecast/daily/${id}`, {
          alt: '0',
          tempunit: 'C',
          windunit: 'MS',
          periods: '8',
          dataset: 'full',
        })
      )
      .then((response) => {
        setForecast(response.data.forecast);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getLocationName = (id) => {
    axios
      .request(prepareLocationOptions(`https://foreca-weather.p.rapidapi.com/location/${id}`))
      .then((response) => {
        setCurrLocationName(response.data.name);
        handleCreateNewKeywords(response.data.name);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleWeatherData = (id) => {
    setCurrentWeather({});
    setForecast([]);
    setIdInStorage(id);

    // get current weather by id
    getCurrentWeather(id);

    // get weeks forecast by id
    getForecast(id);

    // get current location name by id
    getLocationName(id);
  };

  const handleCreateNewKeywords = async (dataToSend) => {
    await addNewKeywords({ keywords: dataToSend });
  };

  const handleCreateNewWeatherDetails = async ({ current }) => {
    const weatherDetails = {
      timeStamp: current.time,
      temperature: current.temperature,
      phrase: current.symbolPhrase,
      humidity: current.relHumidity,
    };

    await addClickedLocationWeatherDetails(weatherDetails);
  };

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleSearch={handleSearch}
              searchValue={searchValue}
              errorMsg={errorMsg}
              locations={locations}
              handleWeatherData={handleWeatherData}
            />
          }
        />

        <Route
          path="/weather/:location"
          element={
            <WeatherDetails
              handleWeatherData={handleWeatherData}
              currentWeather={currentWeather}
              forecast={forecast}
              currLocationName={currLocationName}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
