import React from "react";
import "./Converter.css";
import Spinner from "../Spinner/Spinner";
import { availebleCurrensies } from "../../utils/const";

function Converter({
  baseCurrensyVal,
  baseCurrensy,
  convertedCurrensyVal,
  convertedCurrensy,
  isLoading,
  selectedCurrensyHandler,
  inputHandler,
}) {
  return (
    <div className="converter">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="converter__input-container">
          <input
            id="base"
            className="converter__input"
            type="text"
            value={baseCurrensyVal}
            maxLength="12"
            onKeyUp={(evt) => inputHandler(evt, "base")}
            onChange={(evt) => inputHandler(evt, "baseVal")}
          ></input>
          <select
            id="selectBase"
            className="converter__selector"
            onChange={(evt) => selectedCurrensyHandler(evt, "base")}
          >
            {availebleCurrensies.map((item, i) => (
              <option selected={baseCurrensy === item ? true : false} key={i}>
                {item}
              </option>
            ))}
          </select>
          <input
            id="convert"
            className="converter__result"
            value={convertedCurrensyVal}
            onKeyUp={(evt) => inputHandler(evt, "converted")}
            onChange={(evt) => inputHandler(evt, "convertedVal")}
          ></input>
          <select
            id="selectConverted"
            className="converter__selector"
            onChange={(evt) => selectedCurrensyHandler(evt, "converted")}
          >
            {availebleCurrensies.map((item, i) => (
              <option
                selected={convertedCurrensy === item ? true : false}
                key={i}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default Converter;
