import styled from "styled-components";
import Input from "./Input";
import frankFurterApi from "../services/frankFurterApi";
import { useEffect, useState } from "react";
const StyledTable = styled.div`
  border: 1px solid #ccc;
  height: 300px;
  width: 60%;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
`;

function Table() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await frankFurterApi();
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledTable>
      <Input label="EUR" value="1" disabled={true} name="EUR" />
      <Input label="INR" value={data?.rates?.INR} disabled={true} name="INR" />
      <Input label="JPY" value={data?.rates?.JPY} disabled={true} name="JPY" />
    </StyledTable>
  );
}

export default Table;
