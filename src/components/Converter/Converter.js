import React from "react";
import "./Converter.css";
import Spinner from "../Spinner/Spinner";
import { availebleCurrensies } from "../../utils/const";

function Converter({
  baseCurrencyVal,
  baseCurrency,
  convertedCurrencyVal,
  convertedCurrency,
  isLoading,
  selectedCurrencyHandler,
  inputHandler,
}) {
  return (
    <div className="converter">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="converter__container">
          <div className="converter__container-input-select">
            <input
              id="base"
              className="converter__input"
              type="text"
              value={baseCurrencyVal}
              maxLength="12"
              onKeyUp={(evt) => inputHandler(evt, "base")}
              onChange={(evt) => inputHandler(evt, "baseVal")}
            ></input>
            <select
              id="selectBase"
              className="converter__selector"
              onChange={(evt) => selectedCurrencyHandler(evt, "base")}
            >
              {availebleCurrensies.map((item, i) => (
                <option selected={baseCurrency === item ? true : false} key={i}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="converter__container-input-select">
            <input
              id="convert"
              className="converter__result"
              value={convertedCurrencyVal}
              onKeyUp={(evt) => inputHandler(evt, "converted")}
              onChange={(evt) => inputHandler(evt, "convertedVal")}
            ></input>
            <select
              id="selectConverted"
              className="converter__selector"
              onChange={(evt) => selectedCurrencyHandler(evt, "converted")}
            >
              {availebleCurrensies.map((item, i) => (
                <option
                  selected={convertedCurrency === item ? true : false}
                  key={i}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default Converter;
