import React, {useState} from 'react'
import {Data} from '../data/data'
import AccordionItem from './AccordionItem'
import './AccordionList.css'

function AccordionList() {

    
    return (
        <div className='accordion'>
            <div className='accordion-container'>
                {Data.map((d) => (
                    <AccordionItem question={d.question} answer={d.answer} />
                ))}            
            </div>
        </div>
    )
}

export default AccordionList
