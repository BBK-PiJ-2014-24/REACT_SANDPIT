import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import SidebarData from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Sidebar.css';

function Sidebar() {

    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <>  
            {/* Top Horizontal Nav */}
            <div className="sidebar">
                <Link to='#' className='menu-bars' >
                    <FaIcons.FaBars onClick={toggleSidebar} />
                </Link>
            </div>
            {/* Sidebar Drawer */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={toggleSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars' >
                            <AiIcons.AiOutlineClose  />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => ( 
                        <li key={index} className={item.cName}>
                            {/* The Link will Reference the list of Routes */}
                            <NavLink to={item.path} activeClassName='active' > {/* activeClassName is not working yet in v6 */}
                                {item.icon}
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Sidebar
