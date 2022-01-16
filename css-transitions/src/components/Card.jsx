import React, {useState} from 'react'
import { CSSTransition } from "react-transition-group";

import './Card.css'

{/* 
    1.CSSTRANSITION  wraps the element to transform. In this case <p>
    2.TheTransition is triggered on the IN= STATEVARIABLE
    3.Ensure UNMOUNTONEXIT to reset state on re-run testing
    4.CLASSNAMES gives the prefix for the name of the 4 CT methods *-enter, *-enter-active, *-exit, *-exit-active 

*/}
function Card() {
    const [showBody, setShowBody] = useState(false);

    return (
        <div className='card-container'>
            <h1 className='card-title'>The Title</h1>  
                <CSSTransition in={showBody}
                               timeout={5000}
                               classNames="transition"
                               unmountOnExit
                >
                    <p className='card-body'>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                    Hendrerit parturient habitant
                    </p>
                </CSSTransition>
            
            <button className='card-button' onClick={()=>setShowBody(prevState => !prevState)}>
                {showBody ? 'Close Body' : 'Show Body'}
            </button>
        </div>
    )
}

export default Card
