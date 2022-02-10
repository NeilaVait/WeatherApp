import { Error, Input, InputContainer } from './styles/InputContainer.styled';

export default function SearchInput({ handleSearch, searchValue, errorMsg }) {
  return (
    <>
      <InputContainer>
        <Input type="text" maxLength="30" value={searchValue} onChange={handleSearch} placeholder="Enter location" />
      </InputContainer>
      {errorMsg && <Error>{errorMsg}</Error>}
    </>
  );
}
