import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { useEffect, useState } from "react";
import frankFurterApi from "../services/frankFurterApi";
const StyledHeader = styled.h1`
  margin: 12px;
`;

const StyledForm = styled.form`
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Form() {
  const [data, setData] = useState({
    amount: "",
    base: "",
    date: "",
    rates: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await frankFurterApi({ amount: 1 });
        setData({ response });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const rates = data?.response?.rates;

  function handleSubmit(event) {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await frankFurterApi({ amount: data.amount });
        setData({ response });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }

  function handleChange(event) {
    const { value } = event.target;
    setData((prevState) => ({
      ...prevState,
      amount: value,
    }));
  }

  return (
    <StyledForm onSubmit={(event) => handleSubmit(event)}>
      <StyledHeader>
        Check <span style={{ color: "#e62929" }}>USD</span> Currency Against
        Other Currencies
      </StyledHeader>
      <Input
        label="USD"
        value={data?.response?.amount}
        onChange={(event) => handleChange(event)}
      />
      <Input label="INR" value={rates?.INR} disabled={true} />
      <Input label="EUR" value={rates?.EUR} disabled={true} />
      <Input label="JPY" value={rates?.JPY} disabled={true} />
      <Input label="CNY" value={rates?.CNY} disabled={true} />

      <Button>Check</Button>
    </StyledForm>
  );
}

export default Form;
