import React, { useContext } from "react";
import GlobalContext from "../context/index";
import '../styles/components/TipAmount.css';

function TipAmount() {
  const { tipAmount } = useContext(GlobalContext);

  return (
    <section className="tipAmount__container">
      <div className="tipAmount__wrapper">
        <label className="label label__white">Tip Amount</label>
        <label className="label label__gray">/ person</label>
      </div>
      <span className="label label__cyan">
        ${tipAmount.toFixed(2)}
      </span>
    </section>
  );
}

export default TipAmount;
