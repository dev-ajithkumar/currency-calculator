import styled, { css } from "styled-components";

const InputField = styled.input`
  padding: 10px;
  width: 160px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  margin: 10px;
  &:focus {
    border-color: #007bff;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #f4f4f4;
      color: #999;
      cursor: not-allowed;
    `}
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = ({ label, placeholder, onChange, value, disabled }) => {
  return (
    <StyledInputContainer>
      <Label>{label}</Label>
      <InputField
        type="text"
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        disabled={disabled}
      />
    </StyledInputContainer>
  );
};

export default Input;
