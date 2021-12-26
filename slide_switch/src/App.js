import React, {useState} from 'react';
import Switch from "react-switch";
import './App.css';


// react-switch
// ============
// https://www.npmjs.com/package/react-switch

function App() {

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevState)=> !prevState)
  }

// offColor= background slider on off position
// offHandleColor = knob on off position 

  return (
    <div className={checked ? "App dark-theme": "App"}>
        <Switch onChange={handleChange} 
                checked={checked}
                offColor='#ffbbdd'
                offHandleColor='#fb1239' 

                />
    </div>
  );
}

export default App;
