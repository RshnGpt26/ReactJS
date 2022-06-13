import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <h1>React Router V6</h1>
            <ul>
                <li><NavLink to="/" style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } }>Home</NavLink></li>
                <li><NavLink to="/about" style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } }>About</NavLink></li>
                <li><NavLink to="/contact" style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } }>Contact</NavLink></li>
                <li><NavLink to="/post" style={ ({isActive}) => { return { backgroundColor: isActive ? "Yellow" : '' } } }>Post</NavLink></li>
            </ul>

            {/* This component will render all its child components */}
            <Outlet /> 
        </>
    )
}

export default Layout;