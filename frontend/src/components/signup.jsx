import React from "react";
import "./styles/signup.css";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const SignupForm = () => {
  const[userName, setUserName] = useState();
  const[fullName, setFullName] = useState();
  const[password, setPassword] = useState();
  const[confirmPassword, setConfirmPassword] = useState();
  const[email, setEmail] = useState();
  const[gender, setGender] = useState();
  const[dob, setDob] = useState();

  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // console.log("Passwords do not match");
      // Optionally, show a message to the user
      document.querySelector(".alert").innerText = "Passwords do not match!";
      return; // Exit the function if passwords don't match
    }
    axios.post('http://localhost:3001/register',{userName,fullName,password,confirmPassword,email,gender,dob})
    .then(result => {console.log(result)
      navigate("/login")
    })
    .catch(err => console.log(err))
  }

  return (
    <>
    <div class = "container">
      <div className="box2">
        <span className="borderLine"></span>
        <h2>Sign Up</h2>
        <form id="signupForm" className="form" onSubmit={handleSubmit}>
          <div className="left-panel">
            <div className="input-box2">
              <input id="signupUsername" type="text" required onChange={(e) => setUserName(e.target.value)}/>
              <span>Username</span>
              <i></i>
            </div>

            <div className="input-box2">
              <input id="signupName" type="text" required onChange={(e)=>setFullName(e.target.value)}/>
              <span>Full name</span>
              <i></i>
            </div>

            <div className="input-box2">
              <input id="signupPassword" type="password" required onChange={(e)=>setPassword(e.target.value)}/>
              <span>Password</span>
              <i></i>
            </div>

            <div className="input-box2">
              <input id="signupPasswordConfirm" type="password" required onChange={(e)=>setConfirmPassword(e.target.value)}/>
              <span>Confirm Password</span>
              <i></i>
            </div>
          </div>

          <div className="right-panel">
            <div className="input-box2">
              <input id="signupEmail" type="email" required onChange={(e)=>setEmail(e.target.value)}/>
              <span>Email</span>
              <i></i>
            </div>

            <div className="input-gender">
              <select id="signupGender"onChange={(e)=>setGender(e.target.value)}>
                <option value="">--Select Gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer Not to say</option>
              </select>
            </div>

            <div className="input-dob">
              <input id="signupDOB" type="date" name="dob" required onChange={(e)=>setDob(e.target.value)}/>
            </div>

            <div className="Links">
              <a href="/login">Already have an account?</a>
            </div>
            <input type="submit" value="Create Account" />
          </div>
          <div id="signupMessage" className="message"></div>
        </form>
      </div>
      <div className="alert"></div>
    </div>
    </>
  );
};

export default SignupForm;
