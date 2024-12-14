import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import email_icon from './images/emailicon.jpg';
import password_icon from './images/passwordicon.jpg';
import './login.css';

const SignUp = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handlesubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:3000/sign',{email,password})
  .then(result=>console.log(result))
  .catch(err=>console.log(err))
 }

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">SignUp</div>
          <div className="underline"></div>
          <div className="inputs">
            <div className="input" onSubmit={handlesubmit}>
              <img src={email_icon} alt="" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Id" />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
          </div>
          <div className="submitconatiner">
            <button className="submit" >SignUp</button>
            <Link to="/login">
              <button className="submit">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
