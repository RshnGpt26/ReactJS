import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    let navigate = useNavigate();
    let data = {
        'name': 'Roshan'
    }
    return (
        <>
            <h1>Dashboard Page</h1>
            <button onClick={() => {
                navigate("/logout", {state: data});
                navigate(1); // For forward History(people uses less this feature) values may be 1, -1, 0, 2, -2
            }}>LogOut</button>
        </>
    )
}

export default Dashboard;