import React from "react";
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./reactRouterV6Components/pages/Home";
import About from "./reactRouterV6Components/pages/About";
import Contact from "./reactRouterV6Components/pages/Contact";
import Post from "./reactRouterV6Components/pages/Post";
import PostLayout from './reactRouterV6Components/PostLayout';
import PostDetail from "./reactRouterV6Components/pages/PostDetail";
import Error from './Error';

import Layout from "./reactRouterV6Components/Layout";

const Appss = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>                
                    <Route path="/" element={ <Layout /> } >
                        <Route path="about" element={ <About /> } />
                        <Route path="contact" element={ <Contact /> } />

                        {/* <Route path="/" element={<Home />} /> */}
                        {/* OR */}
                        <Route index element={ <Home /> } />

                        <Route path="post" element={ <PostLayout /> } >
                            <Route path=":category" element={ <PostDetail /> } />
                            <Route index element={ <Post /> } />
                        </Route>
                        
                    </Route>
                    <Route path="*" element={ <Error /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Appss;