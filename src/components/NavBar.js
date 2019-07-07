import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logo">Logo</Link>
            <ul className="navbar__ul">
                <li>
                    <NavLink to="/" className="navbar__links" activeClassName="is-active" exact={true}>Home</NavLink>    
                </li>
                <li>
                    <NavLink to="/my-account" className="navbar__links" activeClassName="is-active">Account</NavLink>    
                </li>
                <li>
                    <NavLink to="/checkout" className="navbar__links" activeClassName="is-active"> {props.cart.length} Checkout</NavLink>    
                </li>
                <li>
                <NavLink to="/login" className="navbar__links" activeClassName="is-active">Login</NavLink>    
            </li>
            </ul>
        </nav>
    )
}

export default NavBar;