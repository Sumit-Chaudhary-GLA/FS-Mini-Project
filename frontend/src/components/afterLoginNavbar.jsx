import React from "react";
import "./styles/afterLoginNavbar.css";
import logo from "./logo/logo1.png";
import cart from "./icons/cart.png";
import user from "./icons/user.png";

const AfterLoginNavbar = ({ onLogout }) => {
    const cartItemCount = 3; // Replace with dynamic value as needed

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
            <div className="navigation-buttons">
                <a href="/home">Home</a>
                <a href="/services">Services</a>
                <a href="/cart" className="icon-wrapper icon">
                    <img src={cart} alt="Cart" />
                    {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
                </a>

                {/* User Dropdown */}
                <a href="" className="user-dropdown icon">
                <div className="icon">
                        <img className = "icon"src={user} alt="User" />
                    </div>
                    <div className="dropdown-content">
                        <a href="/profile">Profile</a>
                        <a href="#" onClick={handleLogout}>Logout</a>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default AfterLoginNavbar;
