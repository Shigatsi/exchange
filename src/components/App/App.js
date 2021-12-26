import React from "react";
import "./App.css";

import Header from "../Header/Header";
import Converter from "../Converter/Converter";

import Footer from "../Footer/Footer";

import { getLatest } from "../../utils/Api";

function App() {
  const [baseCurrensy, setBaseCurrensy] = React.useState("EUR");
  const [convertedCurrensy, setConvertedCurrensy] = React.useState("RUB");
  const [convertedCurrensyVal, setConvertedCurrensyVal] = React.useState("");
  const [baseCurrensyVal, setBaseCurrensyVal] = React.useState("");
  const [convertedValue, setConvertedValue] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getLatest(baseCurrensy)
      .then((currensies) => {
        return currensies;
      })
      .then((currensies) => {
        setConvertedCurrensyVal(currensies.data[convertedCurrensy]);
        setConvertedValue(currensies.data[convertedCurrensy]);
        setBaseCurrensyVal("1");
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [baseCurrensy, convertedCurrensy]);

  const selectedCurrensyHandler = (evt, id) => {
    if (id === "base") {
      setBaseCurrensy(evt.target.value);
    } else if (id === "converted") {
      setConvertedCurrensy(evt.target.value);
    }
  };

  const inputHandler = (evt, id) => {
    if (id === "base") {
      setConvertedCurrensyVal(evt.target.value * convertedValue);
    } else if (id === "converted") {
      setBaseCurrensyVal(evt.target.value / convertedValue);
    } else if (id === "baseVal") {
      setBaseCurrensyVal(evt.target.value);
    } else if (id === "convertedVal") {
      setConvertedCurrensyVal(evt.target.value);
    }
  };

  return (
    <div className="page">
      <Header />
      <Converter
        baseCurrensyVal={baseCurrensyVal}
        baseCurrensy={baseCurrensy}
        convertedValue={convertedValue}
        convertedCurrensyVal={convertedCurrensyVal}
        convertedCurrensy={convertedCurrensy}
        isLoading={isLoading}
        selectedCurrensyHandler={selectedCurrensyHandler}
        inputHandler={inputHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
