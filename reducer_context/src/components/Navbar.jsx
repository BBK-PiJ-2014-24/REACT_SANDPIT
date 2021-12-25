import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import HeaderContext from '../contexts/headerColor/HeaderContext'
import NavbarData from '../assets/NavbarData';

import './Navbar.css';

function Navbar() {

    const headerContext = useContext(HeaderContext);

    return (
        <nav className='navbar-container' style={{background: headerContext.color}}>
            <div className='logo'>Logo</div>
            <ul className='nav-list'>
                {NavbarData.map((item, index)=>(
                    <li key={index} className='nav-item'>
                        <NavLink to={item.path} style={{color: headerContext.color, filter: 'hue-rotate(180deg)', brightness: '250%'}}>{item.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar