import React, { useContext } from "react";
import { AppContext } from "../App";

function NumberOfPeople() {
  const context = useContext(AppContext);

  return (
    <>
      <h2>Number of People</h2>
      <input
        value={context.numberOfPeople}
        onChange={(event) => {
          context.setNumberOfPeople(event.target.value);
        }}
        type="number"
        name="numberPeople"
        id="numberPeople"
      />
    </>
  );
}

export default NumberOfPeople;
