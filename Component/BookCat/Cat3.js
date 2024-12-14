import React, { useState } from "react";
import Rating from '@mui/material/Rating';import NavBar from "./CatNavBar";
import './Cat1.css';
import Menu from "../Menu";
function Cat3(){
  //book1
  const [modal1, setModal1] = useState(false);

  const toggleModal1 = () => {
    setModal1(!modal1);
  };

  if(modal1) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  //book2
  const [modal2, setModal2] = useState(false);

  const toggleModal2 = () => {
    setModal2(!modal2);
  };

  if(modal1) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  //book3
  const [modal3, setModal3] = useState(false);

  const toggleModal3 = () => {
    setModal3(!modal3);
  };

  if(modal3) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  //book4
  const [modal4, setModal4] = useState(false);

  const toggleModal4 = () => {
    setModal4(!modal4);
  };

  if(modal4) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  //book5
  const [modal5, setModal5] = useState(false);

  const toggleModal5 = () => {
    setModal5(!modal5);
  };

  if(modal5) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
    return(
      <div className="container">
      <div className="child1">
        <Menu/>
      </div>
      <div className="child2">
          <div id="Home">
        <div>
        <NavBar/>
        <div id="container">
            <div id="book_container">
            <table className="table">
        <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Author</th>
            </tr>
            <tr>
              <td>1</td>
              <td onClick={toggleModal1} className="btn-modal">To Kill a Mockingbird</td>
              <td>Harper Lee</td>
            </tr>
            <tr>
              <td>2</td>
              <td onClick={toggleModal2} className="btn-modal">1984</td>
              <td>George Orwell</td>
            </tr>
            <tr>
              <td>3</td>
              <td onClick={toggleModal3} className="btn-modal">Pride and Prejudice</td>
              <td>Jane Austen</td>
            </tr>
            <tr>
              <td>4</td>
              <td onClick={toggleModal4} className="btn-modal">The Great Gatsby</td>
              <td>F. Scott Fitzgerald</td>
            </tr>
            <tr>
              <td>5</td>
              <td onClick={toggleModal5} className="btn-modal">One Hundred Years of Solitude</td>
              <td>Gabriel Garcia Marquez</td>
            </tr>
            <tr>
              <td>6</td>
              <td>The Catcher in the Rye</td>
              <td>J.D. Salinger</td>
            </tr>
            <tr>
              <td>7</td>
              <td>The Lord of the Rings</td>
              <td>J.R.R. Tolkien</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Brave New World</td>
              <td>Aldous Huxley</td>
            </tr>
            <tr>
              <td>9</td>
              <td>The Kite Runner</td>
              <td>Khaled Hosseini</td>
            </tr>
            <tr>
              <td>10</td>
              <td>The Alchemist</td>
              <td>Paulo Coelho</td>
            </tr>
        </thead>
        </table>
        {modal1 && (
        <div className="modal1">
          <div onClick={toggleModal1} className="overlay"></div>
          <div className="modal-content">
            <div>
            <img id="dune" src={require("../BookImg/ToKillAMockingbird.jpg")} alt="Dune"></img>
            <p>To Kill A Mockingbird<br></br>by Harper Lee</p>
            </div>
            <p>Your Rating</p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.1}></Rating>
            <p>Overall Rating</p>
            <Rating name="read-only" value={4.7} precision={0.1} readOnly></Rating>
            <button className="close-modal" onClick={toggleModal1}>
              CLOSE
            </button>
          </div>
        </div>
      )}


      {modal2 && (
        <div className="modal2">
          <div onClick={toggleModal1} className="overlay"></div>
          <div className="modal-content">
            <div>
            <img id="dune" src={require("../BookImg/1984.jpg")} alt="Dune"></img>
            <p>1984<br></br>by George Orwell</p>
            </div>
            <p>Your Rating</p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5}></Rating>
            <p>Overall Rating</p>
            <Rating name="read-only" value={4.4} precision={0.1} readOnly></Rating>
            <button className="close-modal" onClick={toggleModal2}>
              CLOSE
            </button>
          </div>
        </div>
      )}


      {modal3 && (
        <div className="modal2">
          <div onClick={toggleModal3} className="overlay"></div>
          <div className="modal-content">
            <div>
            <img id="dune" src={require("../BookImg/PrideAndPrejudice.jpg")} alt="Dune"></img>
            <p>Pride and Prejudice<br></br>by Jane Austen</p>
            </div>
            <p>Your Rating</p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5}></Rating>
            <p>Overall Rating</p>
            <Rating name="read-only" value={4.6} precision={0.1} readOnly></Rating>
            <button className="close-modal" onClick={toggleModal3}>
              CLOSE
            </button>
          </div>
        </div>
      )}


      {modal4 && (
        <div className="modal4">
          <div onClick={toggleModal4} className="overlay"></div>
          <div className="modal-content">
            <div>
            <img id="dune" src={require("../BookImg/TheGreatGatsby.jpg")} alt="Dune"></img>
            <p>The Great Gatsby<br></br>by F. Scott Fitzgerald</p>
            </div>
            <p>Your Rating</p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5}></Rating>
            <p>Overall Rating</p>
            <Rating name="read-only" value={4.7} precision={0.1} readOnly></Rating>
            <button className="close-modal" onClick={toggleModal4}>
              CLOSE
            </button>
          </div>
        </div>
      )}


      {modal5 && (
        <div className="modal5">
          <div onClick={toggleModal5} className="overlay"></div>
          <div className="modal-content">
            <div>
            <img id="dune" src={require("../BookImg/OneHundredYearsOfSolitude.jpg")} alt="Dune"></img>
            <p>One Hundred Years of Solitude<br></br>by Gabriel Garcia Marquez</p>
            </div>
            <p>Your Rating</p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5}></Rating>
            <p>Overall Rating</p>
            <Rating name="read-only" value={4.3} precision={0.1} readOnly></Rating>
            <button className="close-modal" onClick={toggleModal5}>
              CLOSE
            </button>
          </div>
        </div>
      )}
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}
export default Cat3;