import { Link } from 'react-router-dom';
import { ResultsContainer, ResultsList, ResultItem } from './styles/ResultsContainer.styled';

export default function SearchResults({ locations, handleWeatherData }) {
  return (
    <ResultsContainer>
      <ResultsList>
        {locations.map((location) => {
          return (
            <Link onClick={() => handleWeatherData(location.id)} key={location.id} to={`/weather/${location.name}`}>
              <ResultItem>
                <strong>{location.name}</strong> | {location.country} | {location.adminArea}
              </ResultItem>
            </Link>
          );
        })}
      </ResultsList>
    </ResultsContainer>
  );
}
