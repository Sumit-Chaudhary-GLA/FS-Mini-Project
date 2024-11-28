import React from "react";
import "./styles/afterLoginNavbar.css";
import logo from "./logo/logo1.png";
import cart from "./icons/cart.png";
import user from "./icons/user.png";
import { NavLink, useNavigate,Link, useLocation } from "react-router-dom";

const AfterLoginNavbar = ({ onLogout, setSearchQuery}) => {
    const cartItemCount = 3; // Replace with dynamic value as needed
    const navigate = useNavigate();
    const location = useLocation(); // Get the current route
    
    
    const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    };
    
    const handleLogout = () => {
        // Handle logout logic
        localStorage.removeItem("authToken");
        onLogout(); // Call onLogout passed from the parent component
        
    };

    return (
        <div className="nav-bar-2">
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
                <NavLink to="/checkout" className="icon-wrapper icon">
                    <img src={cart} alt="Cart" />
                    {/* {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>} */}
                </NavLink>

                {/* User Dropdown */}
                <a href="" className="user-dropdown icon">
                    <div className="icon">
                        <img className = "icon"src={user} alt="User" />
                    </div>
                    <div className="dropdown-content">
                        <NavLink to="/profile">Profile</NavLink>
                        <NavLink to="#" onClick={handleLogout}>Logout</NavLink>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default AfterLoginNavbar;
