import styled from 'styled-components';

export const ForecastContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 3em;
  height: 100%;
  margin-bottom: 3em;
`;

export const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 10px;
  box-shadow: 0px 1px 5px #90e0ef;

  @media (max-width: 414px) {
    justify-content: space-evenly;
  }
`;

export const Date = styled.div`
  width: 15%;

  @media (max-width: 414px) {
    width: 40%;
  }
`;

export const Symbol = styled.img`
  width: 3em;
`;

export const TempContainer = styled.div`
  flex-basis: 20%;
  text-align: center;
  padding: 0 2em;
`;

export const HighTemp = styled.div`
  border-bottom: 1px solid #90e0ef;
  padding-bottom: 0.2em;
  font-size: 1.2em;
  font-weight: bold;
`;

export const LowTemp = styled.div`
  padding-top: 0.5em;
  font-size: 0.8em;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 50%;

  @media (max-width: 414px) {
    display: flex;
    justify-content: end;
  }
`;

export const Phrase = styled.span`
  font-style: italic;
  font-size: 0.9em;

  &:first-letter {
    text-transform: capitalize;
  }

  @media (max-width: 414px) {
    display: none;
  }
`;

export const Precip = styled.span`
  color: #90e0ef;
`;
