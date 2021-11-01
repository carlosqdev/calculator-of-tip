import React, { useState, useEffect } from "react";
import Bill from "./Bill/Bill";
import TipPercentage from "./TipPercentage/TipPercentage";
import NumberOfPeople from "./NumberOfPeople/NumberOfPeople";
import TipAmount from "./TipAmount/TipAmount";
import Total from "./Total/Total";
import ButtonReset from "./ButtonReset/ButtonReset";

import { DataTip } from "./data";
import logo from "./img/logo.svg";
import "./App.css";

export const AppContext = React.createContext();

function App() {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (bill > 0 && percentage > 0) {
      setTotal((parseFloat(percentage) * parseFloat(bill)) / 100);
    }

    if (numberOfPeople > 0 && total > 0) {
      setTipAmount(parseFloat(total) / parseFloat(numberOfPeople));
    }
  }, [percentage, bill, total, numberOfPeople]);

  return (
    <>
      <img
        className="img__logo"
        loading="lazy"
        width="25%"
        height="auto"
        src={logo}
        alt="Foto de logotipo"
      />
      <section className="calculator">
        <AppContext.Provider
          value={{
            bill,
            percentage,
            numberOfPeople,
            tipAmount,
            total,
            setBill,
            setPercentage,
            setNumberOfPeople,
            setTipAmount,
            setTotal,
          }}
        >
          <section>
            <Bill />
            <label className="label">Select Tip %</label>
            <section className="select__tip">
              {DataTip.map((item) => (
                <TipPercentage
                  key={item.id.toString()}
                  percentage={item.percentage}
                />
              ))}
            </section>
            <NumberOfPeople />
          </section>
          <section className="totals__wrapper">
            <div>
              <TipAmount />
              <Total />
            </div>
            <ButtonReset />
          </section>
        </AppContext.Provider>
      </section>
    </>
  );
}

export default App;
