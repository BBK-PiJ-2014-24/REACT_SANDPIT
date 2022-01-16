import React, {useState} from 'react'
import {IoChevronDown, IoChevronUp} from 'react-icons/io5'
import './AccordionItem.css'

// In v2, the Accordion Item controls its own state of when to open up and therefore we can have several
// items open at the same time.
// =====================================================================================================
function AccordionItem({question, answer}) {
    
    const [isDisplayAnswer, setIsDisplayAnswer] = useState(false);

    const toggleAnswer = () => {
        setIsDisplayAnswer(prevState => !prevState)
    }

    return (
        <div>
            <div className='question' question={question}  onClick={toggleAnswer}>
                <h1>{question}</h1>
                <span>{isDisplayAnswer ? <IoChevronUp /> : <IoChevronDown  />}</span>
            </div>
                {isDisplayAnswer &&
                    <div className='answer' answer={answer} >
                            <p>{answer}</p>
                    </div>
                }    
        </div>
    )
}

export default AccordionItem
