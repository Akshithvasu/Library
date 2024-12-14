import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import admin from './images/admin.jpg';
import student from './images/student.jpg';
import img from './images/img4.jpg';

function Home() {
  return (
    <div>
      <div>
        <h1 id="header">Library Manager</h1>
      </div>
      <div id="contain">
        <img id="i1" src={img} alt="Library Image" />
        <h1 id="h1">Manage Your</h1>
        <h1 id="h2">Books In</h1>
        <h1 id="h3">Good Manner</h1>
        <h3 id="h4">Website for you to keep management of your books</h3>
      </div>
      <div>
        <Link to="/sign">
          <img id="admin" src={admin} alt="Admin Logo" />
        </Link>
        <Link to="/sign">
          <img id="student" src={student} alt="Student Logo" />
        </Link>
      </div>
      <h1 id="h5">More about us</h1>
    </div>
  );
}

export default Home;
