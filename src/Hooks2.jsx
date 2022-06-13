import React, { useState } from "react";

const Hook2 = () => {
    let newTime = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(newTime);
    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCurrentTime(newTime);
    }
    return (
        <>
            <h1>{currentTime}</h1>
            <button onClick={UpdateTime}>GET TIME</button>
        </>
    );
}

export default Hook2;