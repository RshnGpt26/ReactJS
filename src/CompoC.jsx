import React from "react";
import { FirstName, LastName } from "./ContextAPI";

const CompoC = () => {
    return (
        <>
            {/* Use consumers to consume value */}
            <FirstName.Consumer>
                {(fName) => {
                    return (
                        <>
                            <LastName.Consumer>
                                {(lName) => {
                                    return (                                        
                                        <h1>This is { fName } { lName } in CompoC</h1>
                                    )
                                }}
                            </LastName.Consumer>
                        </>
                    );
                }}
            </FirstName.Consumer>
        </>
    );
}

export default CompoC;