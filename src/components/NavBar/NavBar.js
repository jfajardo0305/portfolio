import React from 'react';
import {Link} from 'react-scroll';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <img src="" alt=""/>
            <div className="nav-bar-menu">
                <Link className="nav-bar-menu-list">Home</Link>
                <Link className="nav-bar-menu-list">About Me</Link>
                <Link className="nav-bar-menu-list">Projects</Link>
                <Link className="nav-bar-menu-list">Contact Me</Link>
            </div>
        </nav>
    )
}

export default NavBar;