import React, { useState } from "react";
import Rating from '@mui/material/Rating';import NavBar from "./CatNavBar";
import './Cat1.css'
import Menu from "../Menu";
function Cat2(){
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
              <td onClick={toggleModal1} className="btn-modal">Gone Girl</td>
              <td>Gillian Flynn</td>
            </tr>
            <tr>
              <td>2</td>
              <td onClick={toggleModal2} className="btn-modal">The Da Vinci Code</td>
              <td>Dan Brown</td>
            </tr>
            <tr>
              <td>3</td>
              <td onClick={toggleModal3} className="btn-modal">The Girl with the Dragon Tattoo</td>
              <td>Stieg Larsson</td>
            </tr>
            <tr>
              <td>4</td>
              <td onClick={toggleModal4} className="btn-modal">The Silence of the Lambs</td>
              <td>Thomas Harris</td>
            </tr>
            <tr>
              <td>5</td>
              <td onClick={toggleModal5} className="btn-modal">In the Woods</td>
              <td>Tana French</td>
            </tr>
            <tr>
              <td>6</td>
              <td>The Girl on the Train</td>
              <td>Paula Hawkins</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Before I Go to Sleep</td>
              <td>S.J. Watson</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Sharp Objects</td>
              <td>Gillian Flynn</td>
            </tr>
            <tr>
              <td>9</td>
              <td>The Hound of the Baskervilles</td>
              <td>Arthur Conan Doyle</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Big Little Lies</td>
              <td>Liane Moriarty</td>
            </tr>
        </thead>
        </table>
        {modal1 && (
        <div className="modal1">
          <div onClick={toggleModal1} className="overlay"></div>
          <div className="modal-content">
            <div>
            <img id="dune" src={require("../BookImg/GoneGirl.jpg")} alt="Dune"></img>
            <p>Gone Girl<br></br>by Gillian Flynn</p>
            </div>
            <p>Your Rating</p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.1}></Rating>
            <p>Overall Rating</p>
            <Rating name="read-only" value={4} precision={0.1} readOnly></Rating>
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
            <img id="dune" src={require("../BookImg/TheDaVinci.jpg")} alt="Dune"></img>
            <p>The Da Vinci Code<br></br>by Dan Brown</p>
            </div>
            <p>Your Rating</p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5}></Rating>
            <p>Overall Rating</p>
            <Rating name="read-only" value={3.9} precision={0.1} readOnly></Rating>
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
            <img id="dune" src={require("../BookImg/TheGirlWithTheDragonTattoo.jpg")} alt="Dune"></img>
            <p>The Girl with the Dragon Tattoo book<br></br>by Stieg Larsson</p>
            </div>
            <p>Your Rating</p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5}></Rating>
            <p>Overall Rating</p>
            <Rating name="read-only" value={4.2} precision={0.1} readOnly></Rating>
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
            <img id="dune" src={require("../BookImg/TheSilenceOfTheLambs.jpg")} alt="Dune"></img>
            <p>The Silence of the Lambs<br></br>by Thomas Harris</p>
            </div>
            <p>Your Rating</p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5}></Rating>
            <p>Overall Rating</p>
            <Rating name="read-only" value={4.2} precision={0.1} readOnly></Rating>
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
            <img id="dune" src={require("../BookImg/InTheWoods.jpg")} alt="Dune"></img>
            <p>In the Woods<br></br>by Tana French</p>
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
export default Cat2;