import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// Note :=>  We can make alias of BrowserRouter as given => import { BrowserRouter as Router } from 'react-router-dom';

import Home from "./reactRouterV6Components/pages/Home";
import About from "./reactRouterV6Components/pages/About";
import Contact from "./reactRouterV6Components/pages/Contact";
import Post from "./reactRouterV6Components/pages/Post";
import LogOut from "./reactRouterV6Components/pages/Logout";

import Navbar from "./reactRouterV6Components/Navbar";
import Dashboard from "./reactRouterV6Components/pages/Dashboard";
import Login from "./reactRouterV6Components/pages/Login";

const Apps = () => {
    let isLogged = true;
    let data = {
        'st': 'User not Logged'
    }
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>                
                    {/* <Route path="/" element={<h1>Hello React Router</h1>} /> */}

                    <Route path="/" element={ <Home /> } />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/contact" element={ <Contact /> } />

                    {/* Dynamic Routes */}
                    <Route path="/post/:category" element={ <Post /> } />
                    <Route path="/post/:category/:id" element={ <Post /> } />

                    <Route path="/dashboard" element={isLogged ? <Dashboard/> : <Navigate to="/login" replace state={data} />} /> {/* Here replace contains value true which means previous login data will be not saved */}
                    <Route path="/login" element={<Login />} />

                    {/* We can use useNavigate Hook instead of <Navigate /> which have same features as <Navigate /> (see D:\React_Tutorial\firstReactApp\reactapp\src\reactRouterV6Components\pages\Dashboard.jsx ) */}
                    <Route path="/logout" element={<LogOut />} />

                    {/* 404 page not found */}
                    <Route path="*" element={ <h1>Error 404 page not found...</h1> } />

                </Routes>
            </BrowserRouter>
            {/* OR As per note we can use alias as given below */}

            {/* <Router >

            </Router> */}

        </>
    )
}

export default Apps;

// Note :=> We can use BrowserRouter in index.js by enclosing Apps component inside BrowserRouter as given below
    // index.js =>
        // <BrowserRouter>  
        //    <Apps />
        // <BrowserRouter>