import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  line-height: 1.5;
  padding: 0.5em 2em;
  font-size: 1rem;
  border: white;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 1px #023e8a;

  &:focus {
    outline: none;
  }
`;

export const Error = styled.p`
  color: #f06960;
  width: 100%;
  margin: 1em auto;
  text-align: center;
  font-size: 0.9rem;
`;
