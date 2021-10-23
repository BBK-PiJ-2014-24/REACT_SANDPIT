import React, {useState} from 'react';

const ControlledAdvanced = () => {

    const [textInput, setTextInput] = useState('');

    const handleChange = (e) => {
        setTextInput(e.target.value);
    }    

    return (
        <form>
            <input type='text' value={textInput} onChange={handleChange} />
            {
                textInput.length < 4 ? 
                    (<h3>String must be greated 4 chars</h3>)
                :
                    (<h3>Adequate Size</h3>)    
            }
            <hr style={{borderColor:'red'}} />
        </form>
    ) 
}

export default ControlledAdvanced;