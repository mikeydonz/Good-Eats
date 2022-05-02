import React from 'react';
import {useNavigate} from "react-router-dom";

const GoHome = () => {

    const history = useNavigate();

    const goHome = (e) => {
        e.preventDefault();
        history("/");
    }

    return (
        <div>
            <a style={{cursor: "pointer", fontSize: "18px"}} onClick={goHome} className="text-center">Home</a>
        </div>
    )
};

export default GoHome;
