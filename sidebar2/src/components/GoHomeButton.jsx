import React from 'react'
import {useNavigate} from 'react-router-dom'

function GoHomeButton() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div>
           <button onClick={handleClick}>Go Home</button> 
        </div>
    )
}

export default GoHomeButton
