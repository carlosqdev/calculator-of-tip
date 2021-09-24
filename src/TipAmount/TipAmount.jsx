import React, { useContext } from "react";
import { AppContext } from "../App";

function TipAmount() {
  const context = useContext(AppContext);

  return <h2>Tip Amount $ {context.tipAmount}</h2>;
}

export default TipAmount;
