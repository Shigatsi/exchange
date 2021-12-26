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

  console.log(isLoading);

  const baseInputHandler = (evt) => {
    setConvertedCurrensyVal(evt.target.value * convertedValue);
  };

  const convertedInputHandler = (evt) => {
    setBaseCurrensyVal(evt.target.value / convertedValue);
  };

  const baseCurrensyHandler = (evt) => {
    setBaseCurrensy(evt.target.value);
  };

  const convertedCurrensyHandler = (evt) => {
    setConvertedCurrensy(evt.target.value);
  };

  const baseValHandler = (evt) => {
    setBaseCurrensyVal(evt.target.value);
  };
  const convertedValHandler = (evt) => {
    setConvertedCurrensyVal(evt.target.value);
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
        baseInputHandler={baseInputHandler}
        convertedInputHandler={convertedInputHandler}
        convertedCurrensyHandler={convertedCurrensyHandler}
        baseCurrensyHandler={baseCurrensyHandler}
        baseValHandler={baseValHandler}
        convertedValHandler={convertedValHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
