import styled from 'styled-components';

export const CurrentContainer = styled.div`
  width: 100%;
  padding: 2em;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 1px 5px #90e0ef;

  & > div {
    display: flex;
    gap: 1em;

    @media (max-width: 576px) {
      display: block;
    }
  }
`;

export const MainInfo = styled.div`
  flex-basis: 50%;
`;

export const Title = styled.h4`
  text-transform: uppercase;
  font-size: 1.5em;
  margin-bottom: 0.2em;
`;

export const Time = styled.span`
  font-size: 0.8em;
`;

export const TempAndSymbol = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Symbol = styled.img`
  width: 6em;
`;

export const Temperature = styled.p`
  font-size: 3em;
  text-align: center;
  margin: 0.5em 0 0.2em 0;
`;

export const FeelsLike = styled.p`
  text-align: center;
  margin-bottom: 2em;
  font-size: 0.9em;
`;

export const Phrase = styled.p`
  text-transform: capitalize;
  text-align: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em 0;
  flex-grow: 1;
`;
