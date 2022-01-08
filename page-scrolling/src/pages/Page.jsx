import React, {useEffect} from 'react'
import './Page.css'
import {Button, Link, animateScroll as scroll} from 'react-scroll'

function Page({id, color, upPage, downPage}) {

    const style = {
        background: `${color}`,
        // color: `${color}`,
        // filter: 'hue-rotate(180deg)'
    }

    const styleH1 = {
        color: `${color}`,
        filter: 'invert(100%)',
        
    }
    
    const handleClickToTop = () => {
        scroll.scrollToTop()
    }

    const handleClickToBottom = () => {
        scroll.scrollToBottom({
            duration: 18000,
            smooth: true,
            delay: 100,    
        })
    }

    const scrollMove = () => {

    }

    let oldValue=0;
    useEffect(()=>{
            window.addEventListener('scroll', function(e){
            // console.log('hello');    
            let newValue=0;

            // Get the new Value
            newValue = window.pageYOffset;
            console.log('new value', newValue)
            console.log(' old value', oldValue)
        
            //Subtract the two and conclude
            if(oldValue - newValue < 0){
                console.log("Up");
            } else if(oldValue - newValue > 0){
                console.log("Down");
            }
        
            // Update the old value
            oldValue = newValue;
            console.log(' old value', oldValue)
        })
    }, [])


    // const handleClickToSection = () => {
    //     console.log('helo')
    //     scroll.scrollTo("team", {  
    //         duration: 1500,
    //         delay: 100,
    //         smooth: true,
    //     })
    // }

    return (
        <div name={id} className='page' style={style} >
           <h1 style={styleH1}>{id}</h1> 
           <button className='button-top' onClick={handleClickToTop}>Click to Top</button>
           <div>
                <Link className='link-button down' to={downPage} smooth={true} duration={1500}>Click Down</Link>
                <Link className='link-button up' to={upPage} smooth={true} duration={1500}>Click Up</Link>
           </div>
           <button className='button-bottom' onClick={handleClickToBottom}>Click to Bottom</button>
        </div>
    )
}

export default Page
