import React from 'react'
import {NavLink} from 'react-router-dom'
import NavbarData from '../assets/NavbarData';

import './Navbar.css';

function Navbar() {

    console.log(NavbarData)
    return (
        <nav className='navbar-container'>
            <div className='logo'>Logo</div>
            <ul className='nav-list'>
                {NavbarData.map((item, index)=>(
                    <li key={index} className='nav-item'>
                        <NavLink to={item.path}>{item.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar