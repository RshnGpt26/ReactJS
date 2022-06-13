import React from "react";

// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <ul>
                {/* Here page will refresh each time when page will navigate to routes */}
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li> */}

                {/* So, the solution is as below */}
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li> */}
            </ul>

            {/* To implement CSS inside our navigation links */}
            <ul>
                <li><NavLink to="/" style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } }>Home</NavLink></li>
                <li><NavLink to="/about" style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } }>About</NavLink></li>
                <li><NavLink to="/contact" style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } }>Contact</NavLink></li>

                <li><NavLink to="/post/mobile" style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } }>Post</NavLink></li>
                <li><NavLink to="/post/mobile/1" style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } }>Post with ID</NavLink></li>
            </ul>
        </>
    )
}

export default Navbar;