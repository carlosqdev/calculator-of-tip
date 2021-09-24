import React, { useContext } from "react";
import { AppContext } from "../App";

function Total() {
  const context = useContext(AppContext);

  return (
    <h2>Total ${context.total}</h2>
  )
}

export default Total;