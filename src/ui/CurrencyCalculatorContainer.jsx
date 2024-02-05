import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 20px;
  padding: 20px;
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
`;

function CurrencyCalculatorContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default CurrencyCalculatorContainer;
