import React, {useRef} from 'react'
import './Form.css'

function FormUseRef(props) {

    //** Instead of useState(), we can have useRef() -- BEST TO STICK WITH THE USESTATE METHOD AS IT IS MORE REACT STYLE
    //** 1. Declare and Initialize the useRef state variable  const login = useRef()
    //** 2. Directly link the html Input element with 'ref= {login}' 
    //** 3. Extract the input value from the login.current.value 
    //** 4. Change the ref state variable login.current.value = 'adfaf'

    // const [login, setLogin] = useState('');     // Ditch the useState
    const login = useRef('');
    // const [password, setPassword] = useState('');
    const password = useRef('');


    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page being refreshed

        const data = {
            login: login.current.value,
            password: password.current.value,
        }               // collect input in a obj
        props.addToList(data);

        console.log(data);
        clearForm();  // Clear Form
        props.closeForm(); // Close Modal Form
    }

    // Clears form of data
    const clearForm = () => {
        // setLogin('');
        login.current.value ='';
        password.current.value = '';
        // setPassword('');
    }

    // Handle X Click
    const handleExitForm = () => {
        clearForm();
        props.closeForm();
    }

    // Handle Input Entry ---> NO NEED TO HAVE HANDLE CHANGE
    // const handleChange = (e) => {
    //     if(e.target.name === login){
    //         setLogin(e.target.value);
    //         console.log(login);   
    //     } else {
    //         setPassword(e.target.value);
    //         console.log(password);   
    //     } 
    // }

    // RENDER
    //-------
    // form-container
    //   'X' for exit-form
    //   form-body
    //      form-items
    //   button

    // connect label to state variable with the use of 'ref='

    return (
        <div className='form'>
            <div className='form-container'>
            <div className='exit-form' onClick={handleExitForm}>X</div>
            <h1>The Form</h1>
            <form className='form-body' onSubmit={handleSubmit}>
                <div className='form-item'>
                    <label htmlFor='login'>User Login:</label>
                    <input id='name' ref={login} type='text' className='form-input' />
                </div>
                <div className='form-item'>
                    <label htmlFor={password}>Password:</label>
                    <input id='password' ref={password} type='password' className='form-input' />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>    
            </div>
        </div>
    )
}

export default FormUseRef;
