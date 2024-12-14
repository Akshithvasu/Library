import React from "react";
import { NavLink } from "react-router-dom";
import './CatNavBar.css'
function NavBar(){
    return(
    <div>
        <NavLink className="Catg" to="/Cat1">Fiction</NavLink>
        <NavLink className="Catg" to="/Cat2">Mystery</NavLink>
        <NavLink className="Catg" to="/Cat3">Novel</NavLink>
        <NavLink className="Catg" to="/Cat4">Non-Fiction</NavLink>
        <NavLink className="Catg" to="/Cat5">Science</NavLink>
        <NavLink className="Catg" to="/Cat6">Biography</NavLink>
    </div>
    );
}
export default NavBar;