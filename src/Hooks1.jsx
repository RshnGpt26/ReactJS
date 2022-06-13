import React, { useState } from "react";

const Hook1 = () => {
    // const state = useState(); // Not in use, Just to show how to use state
    // console.log(state);
    const [count, setCount] = useState(0); // const [currentData, updatedData] = initialData
    const incNum = () => {
        setCount(count + 1);
    }
    const decNum = () => {
        setCount(count - 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={ incNum }>Increase</button>
            <button onClick={ decNum }>Decrease</button>
        </>
    );
}

export default Hook1;