import React, { useContext } from "react";
import { AppContext } from "../App";

function ButtonReset() {
  const context = useContext(AppContext);

  const resetCalculator = () => {
    context.setBill(0);
    context.setPercentage(0);
    context.setNumberOfPeople(0);
    context.setTipAmount(0);
    context.setTotal(0);
  };

  return <button onClick={resetCalculator}>Reset</button>;
}

export default ButtonReset;
