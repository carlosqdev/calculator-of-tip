import React, { useContext } from "react";
import "../styles/components/NumberOfPeople.css";

import GlobalContext  from "../context/index";

function NumberOfPeople() {
  const { numberOfPeople, setNumberOfPeople } = useContext(GlobalContext);

  function handleChange(e) {
    setNumberOfPeople(e.target.value)
  }

  return (
    <section className="people__wrapper">
      <label htmlFor="numberPeople" className="label grid__title">Number of People</label>
      <label
        className={numberOfPeople <= 0 ? "label label__warning grid__warning" : "hide"}>
        Can't be zero
      </label>
      <input
        onChange={(e) => handleChange(e)}
        className={numberOfPeople <= 0 ? "input input__warning" : "input"}
        value={numberOfPeople}
        type="number"
        name="numberPeople"
        id="numberPeople"
      />
    </section>
  );
}

export default NumberOfPeople;
