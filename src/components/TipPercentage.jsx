import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";
import '../styles/components/TipPercentage.css';

function TipPercentage({ percentage }) {
  const [showCustomPercentage, setShowCustomPercentage] = useState(false);

  const context = useContext(AppContext);

  useEffect(() => {
    if (percentage === "Custom") setShowCustomPercentage(true);
  }, [percentage]);

  return (
    <>
      {showCustomPercentage ? (
        <input className="tip__input"
          onChange={(event) => {
            context.setPercentage(event.target.value);
          }}
          type="number"
          name="custom"
          id="custom"
          placeholder="Custom"
        />
      ) : (
        <button className="tip__button"
          onClick={() => {
            context.setPercentage(percentage);
          }}
        >
          {percentage}%
        </button>
      )}
    </>
  );
}

export default TipPercentage;
