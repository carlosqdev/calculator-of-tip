import React, { useContext } from "react";
import "../styles/components/NumberOfPeople.css";

import { AppContext } from "../App";

function NumberOfPeople() {
  const { numberOfPeople, setNumberOfPeople } = useContext(AppContext);

  return (
    <section className="people__wrapper">
      <label className="label grid__title">Number of People</label>
      <label
        className={numberOfPeople <= 0 ? "label label__warning grid__warning" : "hide"}>
        Can't be zero
      </label>
      <input
        className={numberOfPeople <= 0 ? "input input__warning" : "input"}
        value={numberOfPeople}
        onChange={(event) => setNumberOfPeople(event.target.value)}
        type="number"
        name="numberPeople"
        id="numberPeople"
      />
    </section>
  );
}

export default NumberOfPeople;
