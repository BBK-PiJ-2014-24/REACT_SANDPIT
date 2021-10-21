import React, {useRef} from 'react';
// When using an uncontrolled component, you can only access the value of the input when you submit the form. However, when using a controlled component, we always have access to the value. Therefore it is easy to implement validation checks on every keystroke.

const Uncontrolled = () => {

    const inputRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Uncontrolled: ', inputRef.current.value);
    }

    return (

        <form>
            <input type='text' ref={inputRef} />
            <button onClick={handleClick}>Uncontrolled</button>
            <h3>Uncontrolled Input: {inputRef.current.value}</h3>
        </form>
    )


}

export default Uncontrolled;