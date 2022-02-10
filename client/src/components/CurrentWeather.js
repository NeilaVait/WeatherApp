import { Flex } from './styles/Flex';
import Loading from './Loading';
import {
  CurrentContainer,
  MainInfo,
  Details,
  Title,
  Time,
  Temperature,
  FeelsLike,
  Phrase,
  Symbol,
  TempAndSymbol,
} from './styles/CurrentContainer';

export default function CurrentWeather({ currentWeather: { current }, currLocationName }) {
  return (
    <CurrentContainer>
      {current ? (
        <>
          <Title>{currLocationName}</Title>
          <div>
            <MainInfo>
              <Time>{current.time.substring(11, 16)}</Time>

              <TempAndSymbol>
                <Symbol src={`https://developer.foreca.com/static/images/symbols/${current.symbol}.png`} alt="symbol" />
                <div>
                  <Phrase>{current.symbolPhrase}</Phrase>
                  <Temperature>{current.temperature}°C</Temperature>
                  <FeelsLike>Feels like {current.feelsLikeTemp}°C</FeelsLike>
                </div>
              </TempAndSymbol>
            </MainInfo>
            <Details>
              <Flex>
                <span>Humidity</span>
                <span>{current.relHumidity}%</span>
              </Flex>
              <Flex>
                <span>Wind speed</span>
                <span>{current.windSpeed} m/s</span>
              </Flex>
              <Flex>
                <span>UV Index</span>
                <span>{current.uvIndex}</span>
              </Flex>
            </Details>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </CurrentContainer>
  );
}
