import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    // useEffect Hook
    // useEffect(() => {
    //     alert('Clicked');
    // }); // This alert will run all the time when index.jsx page renders(refresh the page or update data)

    // useEffect Hook
    // useEffect(() => {
    //     alert('Clicked');
    // }, []); // This alert will run only first time when page renders. It will not run for update data.

    // useEffect(() => {
    //     alert('Clicked');
    // }, [num]); // This alert will run only when data of num will update

    useEffect(() => {
        alert('Clicked');
    }, [nums]); // This alert will run only when data of nums will update

    return (
        <>
            <button onClick={() => { setNum(num + 1) }}> Click Me { num } </button>
            <br />
            <button onClick={() => { setNums(nums + 1) }}> Click Me { nums } </button>
        </>
    )
}

export default UseEffectHook;