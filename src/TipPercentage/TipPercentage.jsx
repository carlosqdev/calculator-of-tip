import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";
import './TipPercentage.css';

function TipPercentage({ percentage }) {
  const [showCustomPercentage, setShowCustomPercentage] = useState(false);

  const context = useContext(AppContext);

  useEffect(() => {
    if (percentage === "Custom") setShowCustomPercentage(true);
  }, [percentage]);

  return (
    <>
      {showCustomPercentage ? (
        <input
          onChange={(event) => {
            context.setPercentage(event.target.value);
          }}
          type="number"
          name="custom"
          id="custom"
          placeholder="Custom"
        />
      ) : (
        <button className="button__tip"
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
