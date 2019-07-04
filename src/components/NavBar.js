import React from 'react'
const NavBar = () => {
    return (
        <nav className="navbar">
            <a href="#a" className="navbar__logo">Logo</a>
            <ul className="navbar__ul">
                <li>
                    <a href="#a" className="navbar__links">Links</a>    
                </li>
                <li>
                    <a href="#b" className="navbar__links">Links</a>    
                </li>
                <li>
                    <a href="#c" className="navbar__links">Links</a>    
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;