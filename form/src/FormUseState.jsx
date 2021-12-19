import React, {useState} from 'react'
import './Form.css'

function FormUseState(props) {

    const [login, setLogin] = useState('');     // Each input has a state variable
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page being refreshed

        const data = {
            login,
            password,
            checked: checkbox
        }               // collect input in a obj
        props.addToList(data);

        console.log(data);
        clearForm();  // Clear Form
        props.closeForm(); // Close Modal Form
    }

    // Clears form of data
    const clearForm = () => {
        setLogin('');
        setPassword('');
    }

    // Handle X Click
    const handleExitForm = () => {
        clearForm();
        props.closeForm();
    }

    // Handle Input Entry
    const handleChange = (e) => {
        if(e.target.name === 'login'){
            setLogin(e.target.value);
            console.log(login);   
        } else {
            setPassword(e.target.value);
            console.log(password);   
        } 
    }

    const handleClickbox = () => {
        setCheckbox( prevState => ! prevState);
        console.log('clickbox');
    }

    // RENDER
    //-------
    // form-container
    //   'X' for exit-form
    //   form-body
    //      form-items
    //   button

    // connect label and input with htmlFor and name =  state variable name

    return (
        <div className='form'>
            <div className='form-container'>
            <div className='exit-form' onClick={handleExitForm}>X</div>
            <h1>The Form</h1>
            <form className='form-body' onSubmit={handleSubmit}>
                <div className='form-item'>
                    <label htmlFor='login'>User Login:</label>
                    <input id='name' name='login' type='text' className='form-input' onChange={handleChange} />
                </div>
                <div className='form-item'>
                    <label htmlFor='password'>Password:</label>
                    <input id='password' name='password' type='password' className='form-input' onChange={handleChange} />
                </div>
                <div className='checkbox-container'>
                    <label htmlFor='checkbox'>Check the Box</label>
                    <input id='checkbox' name='checkbox' type='checkbox' checked={checkbox} onChange={handleClickbox} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>    
            </div>
        </div>
    )
}

export default FormUseState
