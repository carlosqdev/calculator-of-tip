import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "../context/index";
import '../styles/components/TipPercentage.css';

function TipPercentage({ valuePercentage }) {
  const [showCustomPercentage, setShowCustomPercentage] = useState(false);

  const {percentage, setPercentage} = useContext(GlobalContext);

  function handleChange(e) {
    setPercentage(e.target.value);
  }

  function handleClick() {
    setPercentage(valuePercentage);
  }

  useEffect(() => {
    if (valuePercentage === "Custom") setShowCustomPercentage(true);
  }, [valuePercentage]);

  return (
    <>
      {showCustomPercentage ? (
        <input className="tip__input"
          onChange={(e) => handleChange(e)}
          value={percentage}
          type="number"
          name="custom"
          id="custom"
          placeholder="Custom"
        />
      ) : (
        <button className="tip__button"
          onClick={() => handleClick()}
        >
          {valuePercentage}%
        </button>
      )}
    </>
  );
}

export default TipPercentage;
