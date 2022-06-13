import React, { useState } from 'react';

const Event = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me");
    const bgChange = () => {
        // console.log("Clicked");
        let newBg = "#34495e";
        setBg(newBg);
        setName("Double Click Me");
    }
    const bgBack = () =>{
        setBg(purple);
        setName("Click Me");
    }
    return (
        <>
            <div style={{backgroundColor: bg, height: 100}}>
                <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
            </div>
        </>
    );
}

export default Event;