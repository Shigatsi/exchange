import React from "react";
import "./App.css";

import { getLatest } from "../../utils/Api";
import { availebleCurrensies } from "../../utils/const";

function App() {
  const [baseCurrensy, setBaseCurrensy] = React.useState("EUR");
  const [convertedCurrensy, setConvertedCurrensy] = React.useState("RUB");
  const [convertedCurrensyVal, setConvertedCurrensyVal] = React.useState(null);
  const [baseCurrensyVal, setBaseCurrensyVal] = React.useState("1");

  React.useEffect(() => {
    getLatest(baseCurrensy)
      .then((currensies) => {
        return currensies;
      })
      .then((currensies) => {
        setConvertedCurrensyVal(currensies.data[convertedCurrensy]);
      });
  }, [baseCurrensy, convertedCurrensy]);

  const selectorHandler = (id, setCurrensy) => {
    const selectBox = document.getElementById(id);
    setCurrensy(selectBox.options[selectBox.selectedIndex].value);
  };

  function keyHendler(id, setVal) {
    const inputVal = document.getElementById(id).value;
    setVal(inputVal);
  }
  return (
    <div className="App">
      <header className="header">Конвертер валют</header>
      <div className="converter">
        <div className="converter__input-container">
          <input
            id="base"
            className="converter__input"
            type="text"
            defaultValue="1"
            maxLength="12"
            onKeyUp={(_) => keyHendler("base", setBaseCurrensyVal)}
          ></input>
          <select
            id="selectBase"
            class="converter__selector"
            onChange={(_) => selectorHandler("selectBase", setBaseCurrensy)}
          >
            {availebleCurrensies.map((item, i) => (
              <option selected={baseCurrensy == item ? true : false} key={i}>
                {item}
              </option>
            ))}
          </select>
          <input
            id="convert"
            className="converter__result"
            value={
              baseCurrensyVal === 1
                ? convertedCurrensyVal
                : convertedCurrensyVal * baseCurrensyVal
            }
            onKeyUp={(_) => keyHendler("convert", setConvertedCurrensyVal)}
          ></input>
          <select
            id="selectConverted"
            class="converter__selector"
            onChange={(_) =>
              selectorHandler("selectConverted", setConvertedCurrensy)
            }
          >
            {availebleCurrensies.map((item, i) => (
              <option
                selected={convertedCurrensy == item ? true : false}
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
