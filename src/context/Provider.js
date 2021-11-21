import { useState, useEffect } from "react";
import GlobalContext from "./index";

export default function GlobalProvider({children}) {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  function handleReset() {
    setBill(0);
    setPercentage(0);
    setNumberOfPeople(0);
    setTipAmount(0);
    setTotal(0);
  }

  useEffect(() => {
    if (bill > 0 && percentage > 0) {
      setTotal((parseFloat(percentage) * parseFloat(bill)) / 100);
    }

    if (numberOfPeople > 0 && total > 0) {
      setTipAmount(parseFloat(total) / parseFloat(numberOfPeople));
    }
  }, [percentage, bill, total, numberOfPeople]);

  return (
    <GlobalContext.Provider value={{
      bill,
      percentage,
      numberOfPeople,
      tipAmount,
      total,
      setBill,
      setPercentage,
      setNumberOfPeople,
      handleReset
    }}>
      {children}
    </GlobalContext.Provider>
  )
}