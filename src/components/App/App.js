import React from "react";
import "./App.css";

import Header from "../Header/Header";
import Converter from "../Converter/Converter";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";

import { getLatest } from "../../utils/Api";

function App() {
  const [baseCurrency, setBaseCurrency] = React.useState("EUR");
  const [convertedCurrency, setConvertedCurrency] = React.useState("RUB");
  const [convertedCurrencyVal, setConvertedCurrencyVal] = React.useState("");
  const [baseCurrencyVal, setBaseCurrencyVal] = React.useState("");
  const [convertedValue, setConvertedValue] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [serverErr, setServerErr] = React.useState("");

  React.useEffect(() => {
    setIsLoading(true);
    getLatest(baseCurrency)
      .then((currensies) => {
        return currensies;
      })
      .then((currensies) => {
        setConvertedCurrencyVal(currensies.data[convertedCurrency]);
        setConvertedValue(currensies.data[convertedCurrency]);
        setBaseCurrencyVal("1");
      })
      .catch((err) => {
        console.log(err);
        setServerErr(err);
      })
      .finally(() => setIsLoading(false));
  }, [baseCurrency, convertedCurrency]);

  const selectedCurrencyHandler = (evt, id) => {
    if (id === "base") {
      setBaseCurrency(evt.target.value);
    } else if (id === "converted") {
      setConvertedCurrency(evt.target.value);
    }
  };

  const inputHandler = (evt, id) => {
    if (id === "base") {
      setConvertedCurrencyVal(evt.target.value * convertedValue);
    } else if (id === "converted") {
      setBaseCurrencyVal(evt.target.value / convertedValue);
    } else if (id === "baseVal") {
      setBaseCurrencyVal(evt.target.value.replace(/^-?\\d*(\\.\\d+)?$/, ""));
    } else if (id === "convertedVal") {
      setConvertedCurrencyVal(evt.target.value);
    }
  };

  return (
    <div className="page">
      <Header />
      {serverErr ? (
        <Error serverErr={serverErr} />
      ) : (
        <Converter
          baseCurrencyVal={baseCurrencyVal}
          baseCurrency={baseCurrency}
          convertedValue={convertedValue}
          convertedCurrencyVal={convertedCurrencyVal}
          convertedCurrency={convertedCurrency}
          isLoading={isLoading}
          selectedCurrencyHandler={selectedCurrencyHandler}
          inputHandler={inputHandler}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
