import React, { createContext } from "react";
import CompoA from "./CompoA";

// 1. create context
const FirstName = createContext();
const LastName = createContext();

const ContextAPI = () => {
    return (
        <>
            {/* 2. Use providers to provide value */}
            <FirstName.Provider value={'Roshan'} >
                <LastName.Provider value={'Gupta'} >
                    <CompoA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default ContextAPI;
export { FirstName, LastName };