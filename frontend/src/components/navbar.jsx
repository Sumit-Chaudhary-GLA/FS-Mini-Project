import React from "react";
import './styles/navbar.css';
import logo from "./logo/logo1.png"; 

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="logo-label">
                <div className="logo">
                    <img src={logo} alt="DRUDS Logo" />
                </div>
                <div className="label">
                    <h2>DRUDS</h2>
                    <span>Media Productions</span>
                </div>
            </div>
            <div className="navigation-buttons">
                <a href="/home">Home</a>
                <a href="/services">Services</a>
                <a href="/signup">Signup</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Navbar;
