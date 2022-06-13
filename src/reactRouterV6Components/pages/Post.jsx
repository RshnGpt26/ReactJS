import React from "react";
// import { useParams, useSearchParams } from "react-router-dom";

const Post = () => {
    // To get all the parameters of the entered url (using useParams Hook)
        // const { category, id } = useParams();
        // const [searchParams, setSearchParams] = useSearchParams(); 

        // // Hit the url http://localhost:3000/post/laptop/453?price=10000&sort=asc
        // console.log(searchParams);
        // console.log(searchParams.get('price')); // prints => 10000
        // console.log(searchParams.get('sort')); // prints => asc

    return (
        <>
            {/* <h1>Post Page for { category } with ID { id }</h1> */}

            {/* For Layout */}
            <h1>Post page</h1>
        </>
    )
}

export default Post;