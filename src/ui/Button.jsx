import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #007bff; /* Blue background color */
  color: white; /* Text color */
  border: none; /* Remove border */
  padding: 10px 10px; /* Padding for better readability and clickable area */
  font-size: 16px; /* Font size */
  cursor: pointer; /* Show pointer cursor on hover */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s ease; /* Smooth transition on hover */
  width: 100px;
  /* Hover effect */
  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }

  /* Focus effect */
  &:focus {
    outline: none; /* Remove default focus outline */
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); /* Add blue shadow on focus */
  }

  /* Disabled state */
  &:disabled {
    background-color: #b8b8b8; /* Gray background when disabled */
    cursor: not-allowed; /* Change cursor to not-allowed when disabled */
  }
`;
function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
