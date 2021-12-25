import React from 'react';
import './App.css';

import {getLatest} from '../../utils/Api'

function App() {

  const [baseCurrensy, setBaseCurrensy]= React.useState('EUR');
  const [availebleCurrensies, setAvailebleCurrensies] = React.useState([]);

  React.useEffect(() => {
    getLatest(baseCurrensy).then((res) => {
      setAvailebleCurrensies(Object.keys(res.data));
      console.log(Object.keys(res.data))
      console.log("latest", res);
    });

  }, [baseCurrensy]);

  console.log('baseCurrensy: ', baseCurrensy)

  const selectorHandler = (item) => {
    const selectBox = document.getElementById("selectBase");
    setBaseCurrensy(selectBox.options[selectBox.selectedIndex].value)
  }

  return (
    <div className="App">
      <header className="header">
        Конвертер валют
      </header>
      <div className='converter'>
        <div className='converter__input-container'>
          <input className='converter__input' type="text" value="1"></input>
          <select id= 'selectBase'class="converter__selector" onChange={_=>selectorHandler()}>
          {availebleCurrensies.map((item, i)=>(
            <option selected = {baseCurrensy == item ? true : false}  key={i}>{item}</option>
        ))}
          </select>
          <p className='converter__result'>test</p>
          <select id= 'selectCurrensy'class="converter__selector" onChange={_=>selectorHandler()}>
          {availebleCurrensies.map((item, i)=>(
            <option key={i}>{item}</option>
        ))}
          </select>
        </div>

      </div>
    </div>
  );
}

export default App;
