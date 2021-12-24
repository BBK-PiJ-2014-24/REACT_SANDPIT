import React, {useContext} from 'react'
import HeaderContext from '../contexts/headerColor/HeaderContext'
import './HeaderColorSelector.css'

function HeaderColorSelector() {

    const headerContext = useContext(HeaderContext);

    const colorPalette = ['#8fbaff', '#d8ff8f', '#ffe38f'];

        

    return (
        <div className='header-color-selector'>
            <div className='theme-container'>
                <button onClick={()=>{headerContext.changeBackgroundTheme()}}>ChangeTheme</button>
            </div>
            <div className='color-palette'>
                {colorPalette.map((c)=> (
                    <div className='color-item' 
                        key={c} 
                        style={{background: c}}
                        onClick={()=>{headerContext.changeColor(c)}}
                    />
                ))}
            </div>
        </div>
    )
}


export default HeaderColorSelector


