import React from 'react';
import './App.css';

import {getLatest} from '../../utils/Api'

function App() {
  const [currensies, setCurrensies] = React.useState({})
  const [baseCurrensy, setBaseCurrensy]= React.useState('EUR');
  const [availebleCurrensies, setAvailebleCurrensies] = React.useState([]);
  const [convertedCurrensy, setConvertedCurrensy] = React.useState('RUB');
  const [convertedCurrensyVal, setConvertedCurrensyVal] = React.useState(null);




  React.useEffect(() => {
    getLatest(baseCurrensy).then((res) => {
      setCurrensies(res)
      setAvailebleCurrensies(Object.keys(res.data));
      console.log(Object.keys(res.data))
      console.log("latest", res['data']);
      return res
    })
    .then((res)=>{
      setConvertedCurrensyVal(res.data[convertedCurrensy])
    })
  },[baseCurrensy, convertedCurrensy]);

  console.log('baseCurrensy: ', baseCurrensy)
  console.log('currensies: ', currensies)

  const selectorHandler = (id, setCurrensy) => {
    const selectBox = document.getElementById(id);
    setCurrensy(selectBox.options[selectBox.selectedIndex].value)
  }


  return (
    <div className="App">
      <header className="header">
        Конвертер валют
      </header>
      <div className='converter'>
        <div className='converter__input-container'>
          <input className='converter__input' type="text" value="1"></input>
          <select id= 'selectBase'class="converter__selector" onChange={_=>selectorHandler('selectBase', setBaseCurrensy)}>
          {availebleCurrensies.map((item, i)=>(
            <option selected = {baseCurrensy == item ? true : false}  key={i}>{item}</option>
        ))}
          </select>
          <p className='converter__result'>{convertedCurrensyVal}</p>
          <select id= 'selectConverted'class="converter__selector" onChange={_=>selectorHandler('selectConverted', setConvertedCurrensy)}>
          {availebleCurrensies.map((item, i)=>(
            <option selected = {convertedCurrensy == item ? true : false} key={i}>{item}</option>
        ))}
          </select>
        </div>

      </div>
    </div>
  );
}

export default App;
