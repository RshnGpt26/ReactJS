import React, { useEffect, useState } from "react";

const ChangingTitle = () => {
    const [title, setTitle] = useState(0);
    useEffect(() => {
        document.title = `Clicked ${title} times`
    }, [title]);
    const changeTitle = () => {
        setTitle(title + 1);
    }
    return (
        <>
            <button onClick={changeTitle}>Click me { title }</button>
        </>
    )
}

export default ChangingTitle;