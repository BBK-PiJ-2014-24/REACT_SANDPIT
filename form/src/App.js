import React, {Fragment, useState} from 'react'
import FormUseState from './FormUseState';
// import FormUseRef from './FormUseRef';
import './App.css';



function App() {

const dummyData = [
  {
    id: 1,
    login: 'Stew',
    password: '1234',
    checked: true
  },
  {
    id: 2,
    login: 'Rob',
    password: '5678',
    checked: false,
  }
];  


const [openForm, setOpenForm] = useState(true);
const [loginList, setLoginList] = useState(dummyData);


const handleClick = () =>{
    setOpenForm(prevState => !prevState);
}

const closeForm = () => {
  setOpenForm(false);
}

const addTolist = (newState) => {
  setLoginList((prevState) => [...prevState, newState])
}

  return (
    <div className="App">
      <h1>CLICK THE BUTTOM FOR THE FORM</h1>
      <button onClick={handleClick}>FORM</button>

      <ul className='login-list'>
       {loginList.map(state => (
          <li className='list-item' key={state.id}>{state.login} - {state.password} - {state.checked ? 'Checked' : 'Not Checked'}</li> 
       ))}
      </ul>
      <>
        {openForm && <FormUseState addToList={addTolist} closeForm={closeForm} />}
      </>
    </div>
  );
}

export default App;
