import React from "react";
import "./App.css";
import ToDo from "./components/ToDo/ToDo";
import GridCmp from "./components/Grid/Grid";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import StyledButton from "./components/StyledButton/StyledButton";
import PrimaryDiv from "./components/PrimaryDiv/PrimaryDiv";

const App = () => {
  return (
    <>
      <PrimaryButton>PrimaryButton</PrimaryButton>
      <StyledButton innerText='Styled'></StyledButton>
      <PrimaryDiv borderColor="blue">Gde sii</PrimaryDiv>
    </>
  );
};

export default App;