import React from "react";

const SResult = (props) => {
    const img = `https://source.unsplash.com/400x300?${props.data}`;
    return (
        <>
            <div>
                <img src={img} alt="Search" />
            </div>
        </>
    )
}

export default SResult;