import React, { useState } from "react";
import Menu from './Menu.js'
import user_icon from '../components/images/585e4beacb11b227491c3399.png';
import Adress from '../components/images/homeicon.jpg';
import email_icon from '../components/images/emailicon.jpg';
import password_icon from '../components/images/passwordicon.jpg';
import contact from '../components/images/contact.jpg';

// import { useLocation,useNavigate } from "react-router-dom";
function Profile() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [editMode, setEditMode] = useState(true);

  const handleSave = () => {
   
    setEditMode(true);
  };
  

  return (
    <div className="container">
    <div className="child1">
      <Menu/>
    </div>
    <div className="child2">
        <div id="Home">
        <div></div>
    <div className="navall">
 
   
    <div className="profile">
      <div>
        <img className="Admin" src={user_icon} alt="User Icon" />
        <h2 className="name">FullName</h2>
        <input
          style={{ textAlign: "left" }}
          placeholder="FullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={!editMode}
        />
      </div>
      <div>
        <img className="Admin" src={email_icon} alt="Email Icon" />
        <h2 className="name">Email</h2>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!editMode}
        />
      </div>
      <div>
        <img className="Admin" src={password_icon} alt="Password Icon" />
        <h2 className="name">Password</h2>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={!editMode}
        />
      </div>
      <div>
        <img className="Admin" src={Adress} alt="Address Icon" />
        <h2 className="name">Address</h2>
        <input
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          disabled={!editMode}
        />
      </div>
      <div>
        <img className="Admin" src={contact} alt="Contact Icon" />
        <h2 className="name">Contact</h2>
        <input
          placeholder="Contact"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          disabled={!editMode}
        />
      </div>
      {editMode ? (
        <button onClick={() => setEditMode(false)}>Edit</button>
      ) : (
        <button onClick={handleSave}>Save</button>
      )}
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Profile;
