import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";
import email_icon from './images/emailicon.jpg';
import password_icon from './images/passwordicon.jpg';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password
      });

      if (res.data === "exist") {
        alert("Login successful");
        // Redirect to the admin page or another page upon successful login
        navigate("/admin");
      } else if (res.data === "not exist") {
        alert("Invalid credentials. User not found.");
      }
    } catch (error) {
      alert("Error occurred");
      console.error(error);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Id" />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
          </div>
          <div className="submitcontainer">
            <button className="submit" onClick={submit}>Login</button>
            <Link to="/admin">
              
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
