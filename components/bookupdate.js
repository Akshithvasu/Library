import React, { useState } from 'react';
import axios from 'axios';
import './UpdateBook.css';
import Navbar from './navbar.js';

const UpdateBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/update-book', book);
      console.log('Updated Book:', response.data);

      setBook({
        title: '',
        author: '',
        isbn: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return ( 
    <div className='navall'>
   <div className='Navbar'><Navbar/></div>
    <div className="update-book-container">
      <h2 className="update-book-heading">Update Book</h2>
      <form className="update-book-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          ISBN:
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" className='submit'>Update Book</button>
      </form>
    </div>
    </div>
  );
};

export default UpdateBook;
