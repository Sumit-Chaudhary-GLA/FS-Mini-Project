import React from "react";
import './styles/login.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Send the login request to the server
        axios.post('http://localhost:3001/login', { userName, password })
            .then(result => {
                if (result.data.status === "Success") {
                    // Store JWT token in localStorage on successful login
                    localStorage.setItem('authToken', result.data.token);

                    // Redirect to home page after login
                    navigate('/home');
                    
                } else {
                    // Handle failure (incorrect password or user not found)
                    console.log(result.data); // Log the failure message from the server
                }
            })
            .catch(err => {
                // Handle any error from the API request
                console.log(err);
            });
    };
    
    return (
        <>
        <div className = "container">
            {/* Login Form */}
            <div className="box">
                <span className="borderLine"></span>
                <form onSubmit={handleSubmit}>
                    <h2>Sign In</h2>
                    <div className="input-box">
                        <input type="text" required onChange={(e) => setUserName(e.target.value)}/>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className="input-box">
                        <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="Links">
                        <a href="/forgot-password">Forgot Password</a>
                        <a href="/signup">New user?</a>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
            <div className="alert"></div>
        </div>
        </>

        
    );
};

export default Login;
