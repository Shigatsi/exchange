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
  baseInputHandler,
  convertedInputHandler,
  convertedCurrensyHandler,
  baseCurrensyHandler,
  baseValHandler,
  convertedValHandler,
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
            onKeyUp={(evt) => baseInputHandler(evt)}
            onChange={(evt) => baseValHandler(evt)}
          ></input>
          <select
            id="selectBase"
            className="converter__selector"
            onChange={(evt) => baseCurrensyHandler(evt)}
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
            onKeyUp={(evt) => convertedInputHandler(evt)}
            onChange={(evt) => convertedValHandler(evt)}
          ></input>
          <select
            id="selectConverted"
            className="converter__selector"
            onChange={(evt) => convertedCurrensyHandler(evt)}
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
