import React, { useContext } from "react";
import { AppContext } from "../App";
import "../styles/components/Total.css";

function Total() {
  const { total } = useContext(AppContext);

  return (
    <section className="total__container">
      <div className="total__wrapper">
        <label className="label label__white">Total</label>
        <label className="label label__gray">/ person</label>
      </div>
      <span className="label label__cyan">${total}</span>
    </section>
  );
}

export default Total;
