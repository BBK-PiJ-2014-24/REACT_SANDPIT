import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [inputValue, setInputValue]  = useState('init_value');

  const handleButtonClick = (e) => {
    console.log('Button e.target = ', e.target);
    console.log('Button e object = ', e);
  }
  
  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log('Input e.target = ', e.target);
    console.log('Input e object = ', e);
  }

  return (
    <div className="App">
      <div className="container">
        <h2>Different Event Objects</h2>
        <button className='box' onClick={handleButtonClick}>Click For Button Event Object</button>
        <label htmlFor='static_value'>Static Value Input</label>
        <input id='static_value' className='box' type='text' value='3'/>
        <label htmlFor='dynamic_value'>Dynamic Value Input</label>
        <input className='box' type='text' name={inputValue} onChange={handleInput} />
      </div>
    </div>
  );
}

export default App;
