import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from "react-router-dom";
import Navbar from "./components/navbar";
import AfterLoginNavbar from "./components/afterLoginNavbar";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Carousal from "./components/carousal";
import Services from "./components/services";
import Footer from "./components/footer";
import CheckoutPage from "./components/checkout";
import OrderPlaced from "./components/orderPlaced";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the token is present in localStorage when the app mounts
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Check for the token
    if (token) {
      setIsLoggedIn(true); // User is logged in if token exists
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleLogin = (token) => {
    // On login, save the token and update the login status
    localStorage.setItem("authToken", token);
    setIsLoggedIn(true);
  };


  const handleLogout = () => {
    // On logout, remove the token and update the login status
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query

  return (
    <div>
      <Carousal />
      
      <Router>
        <div>
          {/* Conditional Navbar Rendering */}
          {isLoggedIn ? (
            <AfterLoginNavbar onLogout={handleLogout} setSearchQuery={setSearchQuery} />
          ) : (
            <Navbar setSearchQuery={setSearchQuery} />
          )}

          {/* Route Definitions */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/login"
              element={!isLoggedIn ? <Login onLogin={handleLogin}/> : <Navigate to="/home"/>}
            />
            <Route path="/signup" element={!isLoggedIn ? <Signup/> : <Navigate to="/home"/>} />
            <Route path="/services" element={<Services searchQuery={searchQuery}/>} />
            <Route path="/orderplaced" element={<OrderPlaced />} />

            {/* Protected Route: Checkout */}
            <Route
              path="/checkout"
              element={isLoggedIn ? <CheckoutPage /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
