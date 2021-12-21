
import React  from 'react'
import {useParams} from 'react-router-dom'
import GobackButton from '../components/GoBackButton';


// USING useParams()
function Name() {

  const params = useParams();

    return (
        <div className='reports'>
            <h1>The Param: {params.firstName}</h1> 
            <GobackButton />
        </div>
    )
}

export default Name;