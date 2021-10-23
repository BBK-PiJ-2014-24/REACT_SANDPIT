import React, {useState} from 'react';
// controlled component. Rather than accessing the value of the input through the reference of the element, we can store the value in React state.
// This is considered a controlled component because we are controlling the value of the <input> and have access to it in the React state. This allows the React state to be the “single source of truth”.
const Controlled = () => {

    const [inputText, setInputText] = useState('');

    const handleInput = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       console.log(inputText)
    }


    return (
        <form>
            <input type='text' value={inputText} onChange={handleInput}/>
            <button onClick={handleSubmit}>Submit</button>
            <h2>Input: {inputText}</h2>
            <hr style={{borderColor:'green'}} />
        </form>
    )

}

export default Controlled;