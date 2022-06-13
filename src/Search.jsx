import React, { useState } from "react";
import SResult from "./SResult";

const Search = () => {
    const [img, setImg] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }
    return (
        <>
            <div className="searchbar">
                <input type='text' placeholder='Search Anything' onChange={inputEvent} value={img} />
                { 
                    img === '' ? null : <SResult data={img} />
                }
            </div>
        </>
    )
}

export default Search;