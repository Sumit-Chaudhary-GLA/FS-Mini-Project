import React from "react";
import './styles/navbar.css';
import logo from "./logo/logo1.png"; 
import { NavLink } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setSearchQuery }) => {
    const location = useLocation(); // Get the current route
    const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    };

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

            {/*                          */}
            {location.pathname === '/services' && (
                <div className="search-option">
                <input
                  type="text"
                  className="form-control form-control-lg" // Bootstrap classes for modern look
                  placeholder="Search Services"
                  onChange={handleSearchChange}
                />
              </div>
                    
            )}
            {/*                             */}

            <div className="navigation-buttons">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
