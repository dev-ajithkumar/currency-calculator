import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 150px;
`;

function Select() {
  return (
    <StyledSelect>
      <option>EUR</option>
      <option>INR</option>
      <option>USD</option>
    </StyledSelect>
  );
}

export default Select;
