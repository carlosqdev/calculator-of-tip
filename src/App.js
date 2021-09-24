import React from "react";
import Bill from "./Bill/Bill";
import NumberOfPeople from "./NumberOfPeople/NumberOfPeople";
import TipAmount from "./TipAmount/TipAmount";
import TipPercentaje from "./TipPercentaje/TipPercentaje";
import Total from "./Total/Total";

function App() {
  return (
    <>
      <Bill />
      <TipPercentaje />
      <NumberOfPeople />
      <TipAmount />
      <Total />
    </>
  );
}

export default App;
