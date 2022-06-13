import React from "react";
import { useLocation } from "react-router-dom";

const LogOut = () => {
    let location = useLocation();
    return (
        <>
            <h1>LogOut Page</h1>
            <h2>{location.state.name} Logged out...</h2>
        </>
    )
}

export default LogOut;