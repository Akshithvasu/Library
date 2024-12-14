import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from "./Component/About";
import Profile from "./components/adminprofile";
import Cat1 from './Component/BookCat/Cat1';
import Cat2 from './Component/BookCat/Cat2';
import Cat3 from './Component/BookCat/Cat3';
import Cat4 from './Component/BookCat/Cat4';
import Cat5 from './Component/BookCat/Cat5';
import Cat6 from './Component/BookCat/Cat6';
import Login from './components/login';
import SignUp from './components/signup';
import UpdateBook from './components/bookupdate';
import Details from './components/studentdetails';
import Navbar from './components/navbar';
import StudentProfile from './Component/Profile'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/About' element={<About />} />
          <Route path='/Cat1' element={<Cat1 />} />
          <Route path='/Cat2' element={<Cat2 />} />
          <Route path='/Cat3' element={<Cat3 />} />
          <Route path='/Cat4' element={<Cat4 />} />
          <Route path='/Cat5' element={<Cat5 />} />
          <Route path='/Cat6' element={<Cat6 />} />
          <Route path='/studentprofile' element={<StudentProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/admin" element={<Profile />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/book" element={<UpdateBook />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
