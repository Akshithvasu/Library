import React from 'react';
import './StudentDetails.css'; // Import your CSS file for styling
import Navbar from './navbar.js';
const StudentTable = () => {
  const students = [
   
  ];

  return (
    <div className='navall'>
        <div className='Navbar'><Navbar/></div>
    <div className="student-table-container">
      <h2>Student Details</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Name of Book</th>
            <th>No of Books</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
        <tr className='table'>
            <td>
                <input/>
            </td>
            <td>
                <input/>
            </td>
            <td>
                <input/>
            </td>
            <td>
                <input/>
            </td>
        </tr>
        <tr className='table'>
            <td>
                <input/>
            </td>
            <td>
                <input/>
            </td>
            <td>
                <input/>
            </td>
            <td>
                <input/>
            </td>
        </tr>
        <tr className='table'>
            <td>
                <input/>
            </td>
            <td>
                <input/>
            </td>
            <td>
                <input/>
            </td>
            <td>
                <input/>
            </td>
        </tr>
        <tr className='table'>
            <td>
                <input/>
            </td>
            <td>
                <input/>
            </td>
            <td>
                <input/>
            </td>
            <td>
                <input/>
            </td>
        </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default StudentTable;
