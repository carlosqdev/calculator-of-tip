import React, { useContext } from "react";
import GlobalContext from "../context/index";
import '../styles/components/Bill.css';

function Bill(props) {
  const {bill, setBill } = useContext(GlobalContext);

  function handleChange(e) {
    setBill(e.target.value);
  }

  return (
    <section className="bill__amount">
      <label className="label" htmlFor="bill">Bill</label>
      <input
        onChange={(e) => handleChange(e)}
        className="bill__input"
        value={bill}
        type="number"
        name="bill"
        id="bill"
      />
    </section>
  );
}

export default Bill;
