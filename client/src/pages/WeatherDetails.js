import { Container } from './../components/styles/Container.styled';
import CurrentWeather from './../components/CurrentWeather';
import Forecast from './../components/Forecast';
import { useEffect } from 'react';

function WeatherDetails({ currentWeather, forecast, currLocationName, handleWeatherData }) {
  useEffect(() => {
    const id = localStorage.getItem('locationId');
    handleWeatherData(id);
  }, []);

  return (
    <Container>
      <CurrentWeather currLocationName={currLocationName} currentWeather={currentWeather} />
      <Forecast forecast={forecast} />
    </Container>
  );
}

export default WeatherDetails;
