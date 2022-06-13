import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import NavBar from "./NavBar";
import Services from "./Services";
import User from './User';
import Search from "./Search";

const ReactRouter = () => {
    const Name = () => {
        return <h1>Hello, I am Name Page</h1>
    }
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={ <About name="About" /> } />
                <Route path="/services" element={ <Services name="Services" /> } />
                <Route path='/contact' element={ <Contact name="Contact" /> } />
                <Route path="/contact/name" element={ <Name/> } /> 
                <Route path="/search" element={ <Search /> } />

                {/* useParams hooks url with parameters fname and lname */}
                <Route path="/user/:fname/:lname" element={ <User /> } />

                {/* Url's other than above url's will get Error element */}
                <Route path="*" element={ <Error /> } />

                

            </Routes>
        </>
    )
}

export default ReactRouter;