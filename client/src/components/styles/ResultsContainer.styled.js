import styled from 'styled-components';

export const ResultsContainer = styled.div`
  width: 100%;
  margin-top: 1em;
`;

export const ResultsList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
`;

export const ResultItem = styled.li`
  background-color: transparent;
  cursor: pointer;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  color: #caf0f8;
  border-bottom: 1px solid snow;

  &:hover {
    opacity: 0.8;
  }
`;
