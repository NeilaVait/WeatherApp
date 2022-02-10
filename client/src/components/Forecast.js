import {
  Date,
  DayContainer,
  Details,
  ForecastContainer,
  TempContainer,
  HighTemp,
  LowTemp,
  Symbol,
  Precip,
  Phrase,
} from './styles/ForecastContainer';

export default function Forecast({ forecast }) {
  return (
    <ForecastContainer>
      {forecast?.map((day) => {
        return (
          <DayContainer key={day.date}>
            <Date>{day.date.substring(5, 7) + '/' + day.date.substring(8, 10)}</Date>
            <Symbol src={`https://developer.foreca.com/static/images/symbols/${day.symbol}.png`} alt="" />
            <TempContainer>
              <HighTemp>{day.maxTemp}°C</HighTemp>
              <LowTemp>{day.minTemp}°C</LowTemp>
            </TempContainer>
            <Details>
              <Phrase>{day.symbolPhrase}</Phrase>
              <Precip>🌢 {day.precipProb}%</Precip>
            </Details>
          </DayContainer>
        );
      })}
    </ForecastContainer>
  );
}
