import React, { useContext } from "react";
import { AppContext } from "../App";

function Bill(props) {
  const context = useContext(AppContext);
  return (
    <>
      <h1>Bill</h1>
      <input value={context.bill} onChange={(event) => {context.setBill(event.target.value)}} type="number" name="bill" id="bill" />
    </>
  );
}

export default Bill;
