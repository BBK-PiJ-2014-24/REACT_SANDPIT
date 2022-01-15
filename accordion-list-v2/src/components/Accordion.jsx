import React, {useState} from 'react'
import {FiMinus, FiPlus} from 'react-icons/fi'
import {Data} from '../data/data'
import './Accordion.css'

function Accordion() {

        const [clickIndex, setClickIndex] = useState(false)

    const toggleAnswer = (e) => {
        const idx = parseInt(e.target.getAttribute('id')) 
        console.log(idx)

       if(clickIndex === idx){
           return setClickIndex(null)
       } else {
           setClickIndex(idx);
       }
    }
    
    return (
        <div className='accordion'>
            <div className='accordion-container'>
                {Data.map((d,idx) => (
                    <div key={idx}>
                        <div className='question' id={idx} onClick={toggleAnswer}>
                            <h1 id={idx}>{d.question}</h1>
                            <span id={idx}>{idx === clickIndex ? <FiMinus id={idx} onClick={toggleAnswer} /> : <FiPlus id={idx} onClick={toggleAnswer}/>}</span>
                        </div>
                            {idx === clickIndex &&
                                <div className={'answer'}>
                                        <p>{d.answer}</p>
                                </div>
                            }    
                    </div>
                ))}            
            </div>
        </div>
    )
}

export default Accordion
