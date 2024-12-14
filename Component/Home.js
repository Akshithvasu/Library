import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Cat1 from './BookCat/Cat1'
import Cat2 from './BookCat/Cat2'
import Cat3 from './BookCat/Cat3'
import Cat4 from './BookCat/Cat4'
import Cat5 from './BookCat/Cat5'
import NavBar from './BookCat/CatNavBar';
import Error from "./Error";
function Home(){
    return(
            <div>
                <div>
                <NavBar/>
                </div>
                <div>
                <div>
                <Routes>
                    <Route path="/" element={<Cat1/>}></Route>
                    <Route path="/Cat2" element={<Cat2/>}></Route>
                    <Route path="/Cat3" element={<Cat3/>}></Route>
                    <Route path="/cat4" element={<Cat4/>}></Route>
                    <Route path="/Cat5" element={<Cat5/>}></Route>
                    <Route element={<Error/>}></Route>
                </Routes>
                </div>
                </div>
            </div> 
    );
}
export default Home;