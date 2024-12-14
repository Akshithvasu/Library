import React from "react";
import { NavLink } from "react-router-dom";
import StudentProfile from '../Component/Profile'
import './Menu.css'
function Menu(){
    return(
        <div>
            <NavLink className="active_class" to="/">Home</NavLink>
            <NavLink className="active_class" to="/studentprofile">Profile</NavLink>
            <NavLink className="active_class" to="/About">About Us</NavLink>
        </div>
    );
}
export default Menu;
