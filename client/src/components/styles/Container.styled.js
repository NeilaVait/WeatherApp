import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  max-width: 700px;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    min-width: 95%;
    padding: 0;
  }
`;
