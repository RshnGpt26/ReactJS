import React from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const User = () => {
    // useParams Hook 
    const { fname, lname } = useParams();

    // useLocation Hook
    const location = useLocation();
    // console.log(location);

    // useNavigate Hook
    const navigate = useNavigate();

    return (
        <>
            <h1>Hello, I am { fname } { lname } User Page</h1>
            <p>My current location is { location.pathname }</p>
            {
                location.pathname ===`/user/Roshan/Gupta` ? <button onClick={() => { navigate('../') }}>Click Me</button> : null
            }
        </>
    );
}

export default User;