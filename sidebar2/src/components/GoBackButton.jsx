import React from 'react'
import {useNavigate} from 'react-router-dom'

function GoBackButton() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    }

    return (
        <div>
           <button onClick={handleClick}>Go Back</button> 
        </div>
    )
}

export default GoBackButton
