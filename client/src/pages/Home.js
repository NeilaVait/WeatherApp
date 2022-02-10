import { Container } from './../components/styles/Container.styled';
import SearchInput from './../components/SearchInput';
import SearchResults from './../components/SearchResults';

function Home({ handleSearch, searchValue, errorMsg, locations, handleWeatherData }) {
  return (
    <>
      <Container>
        <SearchInput handleSearch={handleSearch} searchValue={searchValue} errorMsg={errorMsg} />
        <SearchResults locations={locations} handleWeatherData={handleWeatherData} />
      </Container>
    </>
  );
}

export default Home;
