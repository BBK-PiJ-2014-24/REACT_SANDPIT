import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='logo'>
                <h2>Logo</h2>
            </div>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Service</li>
                <li>Team</li>
            </ul>
            
        </div>
    )
}

export default Navbar
