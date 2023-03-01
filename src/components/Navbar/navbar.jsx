import React from "react";
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const navigate = useNavigate();
    const handleClickOnLogo = () => {
        navigate('/');
    }
    return (
        <div className="navbar">
        <h1 onClick={handleClickOnLogo}>EVENTIFY</h1>
        </div>
    );
}