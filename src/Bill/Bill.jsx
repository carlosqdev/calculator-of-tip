import React, { useContext } from "react";
import { AppContext } from "../App";
import './Bill.css';

function Bill(props) {
  const context = useContext(AppContext);
  return (
    <section className="bill__amount">
      <label className="label" htmlFor="bill">Bill</label>
      <input className="bill__input" value={context.bill} onChange={(event) => {context.setBill(event.target.value)}} type="number" name="bill" id="bill" />
    </section>
  );
}

export default Bill;
