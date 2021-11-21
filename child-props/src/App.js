import React, {useState} from 'react';
import {loremIpsum} from 'react-lorem-ipsum';
import Modal from './Modal';
import './App.css';



function App() {

  const [showModal, setShowModal] = useState(true);

  const handleModalClose = ()=> {
    setShowModal(false);
    console.log('Button Clicked');
  }

  return (
    <div className="App">
      <h1>The Title</h1> 
      <div className="text-wrapper latin">
        {loremIpsum({ p: 4 }).map(text => (
              <div className="text latin-para" key={text}>
                  {text}
              </div>
            ))}
      </div>
      {/* CHILD PROPS */}
      {/* For when you want to pass in a large amount of html as a prop, but not easily done using the prop key=value approach */}
      {/*The Child Prop Arguments are inserted directly between the Parent's Tags  */}
      {/* Use Props.children in the Child Component  */}
    {showModal &&  
    <Modal handleModalClose={handleModalClose} > {/* Prop passed as a key-value */}
      <h1>This is a Modal</h1>    {/* Props passed as children */}
      <h3>The Modal Text inserted as a Child Prop</h3>
    </Modal>
    }
    </div>
  );
}

export default App;
