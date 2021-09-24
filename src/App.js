import React, { useState } from "react";
import Bill from "./Bill/Bill";
import TipPercentage from "./TipPercentage/TipPercentage";
import NumberOfPeople from "./NumberOfPeople/NumberOfPeople";
import TipAmount from "./TipAmount/TipAmount";
import Total from "./Total/Total";
import { DataTip } from "./data";

export const AppContext = React.createContext();

function App() {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  console.log(`Esto vale numero de personas: ${numberOfPeople}`);

  return (
    <>
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
        <Bill />
        <section>
          {DataTip.map((item) => (
            <TipPercentage
              key={item.id.toString()}
              percentage={item.percentage}
            />
          ))}
        </section>
        <NumberOfPeople />
        <TipAmount />
        <Total />
      </AppContext.Provider>
    </>
  );
}

export default App;
