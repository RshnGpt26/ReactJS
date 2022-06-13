import React, { useState } from 'react';

// const Cvsu = () => {
//     // Controlled Component
//         // const [name, setName] = useState("");
//         // const [myName, setMyName] = useState("");
//         // const inputEvent = (event) => {
//         //     setName(event.target.value);
//         // }
//         // const onSubmit = (event) => {
//         //     setMyName(name);
//         // }

//     // Uncontrolled Component
//         const [firstName, setName] = useState("");
//         const [lastName, setLastName] = useState("");
//         const [myName, setMyName] = useState("");
//         const inputEventOne = (event) => {
//             setName(event.target.value);
//         }
//         const inputEventTwo = (event) => {
//             setLastName(event.target.value);
//         }
//         const onSubmit = (event) => {
//             event.preventDefault(); // It prevents DOM from HTML's default behavior(page refresh on submit) // This line is for Uncontrolled Component because it contains form element
//             setMyName(`${firstName} ${lastName}`);
//         }
//     return (
//         <>
//             {/* Controlled Component */}
//             {/* <div>
//                 <h1>Hello {myName}</h1>
//                 <input type="text" placeholder='Enter Your Name' onChange={inputEvent} value={name} />
//                 <button type='submit' onClick={onSubmit}>Submit</button>
//             </div> */}

//             {/* Uncontrolled Component */}
//             <div className='main_div'>
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <h1>Hello {myName}</h1>
//                         <input type="text" placeholder='Enter Your first Name' onChange={inputEventOne} value={firstName} />
//                         <input type="text" placeholder='Enter Your Last Name' onChange={inputEventTwo} value={lastName} />
//                         <button type='submit' >Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// }

// *********************** Handling Complex Multiple Input form states *********************************
const Cvsu = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });
    const inputEvent = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);
        // console.log(event.target.placeholder);

        // const value = event.target.value;
        // const name = event.target.name; 
        // OR
        const {value, name} = event.target; // Object destructuring

        setFullName((prevValue) => {
            // console.log(preValue.fname);
            // console.log(preValue.lname);
            // if(name === 'fname') {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     }
            // } else if(name === 'lname') {
            //     return {
            //         lname: value,
            //         fname: preValue.fname,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     }
            // } else if(name === 'email') {
            //     return {
            //         email: value,
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         phone: preValue.phone,
            //     }
            // } else if(name === 'phone') {
            //     return {
            //         phone: value,
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //     }
            // }

            // OR

            return {
                ...prevValue,
                [name]: value,
            }


        });
    }
    const onSubmit = (event) => {
        alert("Form Submitted");
        event.preventDefault(); // It prevents DOM from HTML's default behavior(page refresh on submit)
    }
    return (
        <>
            {/* Controlled Component */}
            {/* <div>
                <h1>Hello {myName}</h1>
                <input type="text" placeholder='Enter Your Name' onChange={inputEvent} value={name} />
                <button type='submit' onClick={onSubmit}>Submit</button>
            </div> */}

            {/* Uncontrolled Component */}
            <div className='main_div'>
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>Hello {fullName.fname} {fullName.lname}</h1>
                        <p>{fullName.email}</p>
                        <p>{fullName.phone}</p>
                        <input type="text" placeholder='Enter Your first Name' name='fname' onChange={inputEvent} value={fullName.fname} />
                        <input type="text" placeholder='Enter Your Last Name' name='lname' onChange={inputEvent} value={fullName.lname} />
                        <input type='email' placeholder="Enter Your email" name='email' onChange={inputEvent} value={fullName.email} autoComplete='off' ></input>
                        <input type='number' placeholder="Enter Your number" name='phone' onChange={inputEvent} value={fullName.phone}></input>
                        <button type='submit' onClick={onSubmit} >Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Cvsu; 