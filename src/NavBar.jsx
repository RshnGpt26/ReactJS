import React from "react";
import './NavBar.css';

// import { Link } from "react-router-dom";
// OR
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            {/* <Link to="/">About  </Link>
            <Link to="/contact">Contact  </Link>
            <Link to ="/contact/name">Name  </Link> */}
            {/* OR */}
            <div className="nav">
                <NavLink style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } } className="link" to="/">About</NavLink>
                <NavLink style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } } className="link" to="/contact">Contact</NavLink>
                {/* <NavLink style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } } className="link" to="/contact/name">Name</NavLink> */}

                {/* This will send Roshan and Gupta by default as parameters fname and lname respectively on click to user in navigation menu */}
                <NavLink style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } } className="link" to="/user/Roshan/Gupta">User</NavLink>

                <NavLink style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } } className="link" to="/search">Search</NavLink>

            </div>
        </>
    )
}

export default NavBar;