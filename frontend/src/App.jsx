import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AfterLoginNavbar from "./components/afterLoginNavbar";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Carousal from "./components/carousal"; 
import Services from "./components/services";
import Footer from "./components/footer";

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

  return (
    <div>
      <Carousal />
      
      <Router>
        <div>
          {/* Conditional Navbar Rendering */}
          {isLoggedIn ? (
            <AfterLoginNavbar onLogout={handleLogout} />
          ) : (
            <Navbar />
          )}

          {/* Route Definitions */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home />} />
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
};

export default App;
