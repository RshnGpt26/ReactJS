import React from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const PostLayout = () => {
    let { category } = useParams();
    return (
        <>
            <h1>Post Layout with { category }</h1>
            <Outlet />
        </>
    )
}

export default PostLayout;