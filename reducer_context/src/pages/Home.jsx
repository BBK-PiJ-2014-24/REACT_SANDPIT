import React, {useContext} from 'react'
import HeaderContext from '../contexts/headerColor/HeaderContext'

function Home() {

    const headerContext = useContext(HeaderContext);
    const theme = headerContext.theme;

    return (
        <div className={theme === 'dark'? 'page dark' : 'page'} >
            <h1>HOME</h1>
        </div>
    )
}

export default Home
