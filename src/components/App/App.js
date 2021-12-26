import React from "react";
import "./App.css";

import { getLatest } from "../../utils/Api";
import { availebleCurrensies } from "../../utils/const";

function App() {
  const [baseCurrensy, setBaseCurrensy] = React.useState("EUR");
  const [convertedCurrensy, setConvertedCurrensy] = React.useState("RUB");
  const [convertedCurrensyVal, setConvertedCurrensyVal] = React.useState("");
  const [baseCurrensyVal, setBaseCurrensyVal] = React.useState("");
  const [convertedValue, setConvertedValue] = React.useState(null);

  React.useEffect(() => {
    getLatest(baseCurrensy)
      .then((currensies) => {
        return currensies;
      })
      .then((currensies) => {
        setConvertedCurrensyVal(currensies.data[convertedCurrensy]);
        setConvertedValue(currensies.data[convertedCurrensy]);
        setBaseCurrensyVal("1");
      });
  }, [baseCurrensy, convertedCurrensy]);

  return (
    <div className="App">
      <header className="header">Конвертер валют</header>
      <div className="converter">
        <div className="converter__input-container">
          <input
            id="base"
            className="converter__input"
            type="text"
            value={baseCurrensyVal}
            maxLength="12"
            onKeyUp={(evt) => {
              setConvertedCurrensyVal(evt.target.value * convertedValue);
            }}
            onChange={(evt) => setBaseCurrensyVal(evt.target.value)}
          ></input>
          <select
            id="selectBase"
            className="converter__selector"
            onChange={(evt) => setBaseCurrensy(evt.target.value)}
          >
            {availebleCurrensies.map((item, i) => (
              <option
                defaultValue={baseCurrensy === item ? true : false}
                key={i}
              >
                {item}
              </option>
            ))}
          </select>
          <input
            id="convert"
            className="converter__result"
            value={convertedCurrensyVal}
            onKeyUp={(evt) =>
              setBaseCurrensyVal(evt.target.value / convertedValue)
            }
            onChange={(evt) => setConvertedCurrensyVal(evt.target.value)}
          ></input>
          <select
            id="selectConverted"
            className="converter__selector"
            onChange={(evt) => setConvertedCurrensy(evt.target.value)}
          >
            {availebleCurrensies.map((item, i) => (
              <option
                defaultValue={convertedCurrensy === item ? true : false}
                key={i}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
