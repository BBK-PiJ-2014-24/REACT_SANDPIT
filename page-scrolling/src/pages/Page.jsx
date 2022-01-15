import React, {useEffect, useRef} from 'react'
import './Page.css'
// React-router Links take the user to different pages. But Scroll LINKS take you
// to different parts of the page. This is the best way to scroll to sections in the page 
// as the scrollTo() does not seem to work.
import {Link, animateScroll as scroll} from 'react-scroll' 

function Page({id, color, upPage, downPage, showNav, toggleNav}) {

    // Inline style f() to dynamically receive background and font color from props ... nothing to do with Scroll
    //-----------------------------------------------------------------------------
    const style = {
        background: `${color}`,
    }

    const styleH1 = {
        color: `${color}`,
        filter: 'invert(100%)',
    }

    // handle click to scroll to the top and bottom of site
    // ---------------------------------
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

    // Event Listener to detect an U for controlling when to show the Navbar
    // ---------------------------------------------------------------------
    const oldValueRef= useRef(0); // ensure value is not lost across renders, BUT EITHER METHOD WORKS
    let oldValue =0;

    let newValue=0;
    console.log('scroll height', window.scrollY)
    console.log('navToggle', showNav)    
    // Check if on different page to activate nav toggle
    useEffect(()=>{
            window.addEventListener('scroll', function(e){
            // Keep Nav showing on first page of scroll         
            if(window.scrollY <= 700){
                    toggleNav(true); // turn Nav back on
            } else {    
                // Get the new px height
                newValue = window.pageYOffset;

                // Determine if scroll up
                if(newValue < oldValueRef.current ){
                    console.log("Up");
                    console.log('new value', newValue)
                    console.log(' old value', oldValueRef.current)
                    console.log(' old value Ref', oldValue)
                    console.log('Up showNav', showNav)
                    toggleNav(true); // turn Nav back on
                    console.log('UpshowNav', showNav)
                } else if(newValue >= oldValueRef.current && showNav){
                    console.log("Down");
                    console.log('new value', newValue)
                    console.log(' old value', oldValueRef.current)
                    console.log(' old value Ref', oldValue)
                    console.log('Down showNav', showNav)
                    toggleNav(false); // turn off Nav
                    console.log('Down showNav', showNav)
                }
            
                // Update the old value
                oldValueRef.current = newValue;
                oldValue = newValue;                
            }
        })},[])
            
    // Ignore - ScrollTo() as does not seem to work..    
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
