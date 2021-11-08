import React, { useContext } from "react";
import { AppContext } from "../App";

function ButtonReset() {
  const {
    setBill,
    setPercentage,
    setNumberOfPeople,
    setTipAmount,
    setTotal
  } = useContext(AppContext);

  function resetCalculator() {
    setBill(0);
    setPercentage(0);
    setNumberOfPeople(0);
    setTipAmount(0);
    setTotal(0);
  }

  return <button className="button" onClick={resetCalculator}>RESET</button>;
}

export default ButtonReset;
