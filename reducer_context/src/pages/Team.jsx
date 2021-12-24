import React, {useContext} from 'react'
import HeaderContext from '../contexts/headerColor/HeaderContext'

function Team() {

    const headerContext = useContext(HeaderContext);
    const theme = headerContext.theme;
    
    return (
        <div className={theme === 'dark'? 'page dark' : 'page'}>
           <h1>Team</h1> 
        </div>
    )
}

export default Team