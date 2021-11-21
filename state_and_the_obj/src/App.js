import React, {useState} from 'react';
import './App.css';

function App() {


  const initialState = [
    {id: 1, word: 'word'},
    {id: 2, word: 'two'},
    {id: 3, word: 'three'}
  ];

  const [list, setList] = useState(initialState);

  // How to UPDATE A LIST ITEM
  // =========================
  // 1. map through with IF condition
  // 2. 2x returns  
  const handleClick = () => {
    setList((prevState) => prevState.map(item => {
      if(item.id === 2){
        const newItem = {
          ...item,
          word:'ZERO'
        }
        return newItem;
      }
      return item;
    }))
  }

  return (
    <div className="App">
      <h1> The State and the Obj</h1>
      <div className='container'>
        <ul>
          {list.map(obj => 
            <li key={obj.id} id={obj.id}> {obj.id}<span>{obj.word}</span> </li>
          )}
        </ul>
        <button onClick={handleClick}>Change Obj 2</button>
      </div>
    </div>
  );
}

export default App;
