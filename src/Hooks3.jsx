import React, { useState } from "react";

const Hook3 = () => {
    let Time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(Time);
    const UpdateTime = () => {
        Time = new Date().toLocaleTimeString();
        setCurrentTime(Time);
    }
    setInterval(UpdateTime,1000);
    return (
        <>
            <h1>{currentTime}</h1>
        </>
    );
}

export default Hook3;