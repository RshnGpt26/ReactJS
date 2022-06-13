import React, { useContext } from "react";
import CompoC from "./CompoC";
import { FirstName, LastName } from "./ContextAPI";

const CompoB = () => {

    // useContext Hooks
    const fName = useContext(FirstName);
    const lName = useContext(LastName);

    return (
        <>
            <h1>This is { fName } { lName } in CompoB</h1>
            <CompoC />
        </>
    );
}

export default CompoB;