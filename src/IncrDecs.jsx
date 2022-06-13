import React, { useState } from "react";
import './IncrDecs.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const IncrDecs = () => {
    const [number, updatedNumber] = useState(0);
    const Incr = () => {
        let newNumber = number + 1;
        updatedNumber(newNumber);
    }
    const Decs = () => {
        let newNumber = number - 1;
        if(newNumber < 0) {
            alert("Number can't be negative");
            newNumber = 0;
        }
        updatedNumber(newNumber);
    }
    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <h1>{number}</h1>
                <div className="btn_div">
                    <button onClick={Incr}><AddIcon /></button>
                    <button onClick={Decs}><RemoveIcon /></button>

                    {/* Material UI Components for React */}

                    <Tooltip title="Add" >
                        <Button onClick={Incr} className="btn_green"><AddIcon /></Button>
                    </Tooltip>
                    <Tooltip title="Remove" >
                        <Button onClick={Decs} className="btn_red"><RemoveIcon /></Button>
                    </Tooltip>

                </div>
            </div>
        </div>
        </>
    )
}

export default IncrDecs;