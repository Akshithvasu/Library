import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import './Cat1.css';
import NavBar from "./CatNavBar";
import Menu from "../Menu";
function Cat1() {
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
  return (
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
              <td onClick={toggleModal1} className="btn-modal">Dune</td>
              <td>Frank Herbert</td>
            </tr>
            <tr>
              <td>2</td>
              <td onClick={toggleModal2} className="btn-modal">Neuromancer</td>
              <td>William Gibson</td>
            </tr>
            <tr>
              <td>3</td>
              <td onClick={toggleModal3} className="btn-modal">Ender's Game</td>
              <td>Orson Scott Card</td>
            </tr>
            <tr>
              <td>4</td>
              <td onClick={toggleModal4} className="btn-modal">The Hitchhiker's Guide to the Galaxy</td>
              <td>Douglas Adams</td>
            </tr>
            <tr>
              <td>5</td>
              <td onClick={toggleModal5} className="btn-modal">Snow Crash</td>
              <td>Neal Stephenson</td>
            </tr>
            <tr>
              <td>6</td>
              <td>The War of the Worlds</td>
              <td>H.G. Wells</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Foundation</td>
              <td>Isaac Asimov</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Stranger in a Strange Land</td>
              <td>Robert A. Heinlein</td>
            </tr>
            <tr>
              <td>9</td>
              <td>The Left Hand of Darkness</td>
              <td>Ursula K. Le Guin</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Altered Carbon</td>
              <td>Richard K. Morgan</td>
            </tr>
        </thead>
        </table>
        

        {modal1 && (
        <div className="modal1">
          <div onClick={toggleModal1} className="overlay"></div>
          <div className="modal-content">
            <div>
            <img id="dune" src={require("../BookImg/dune-book.jpg")} alt="Dune"></img>
            <p>Dune<br></br>by Frank Herbert</p>
            </div>
            <p>Your Rating</p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5}></Rating>
            <p>Overall Rating</p>
            <Rating name="read-only" value={4.5} precision={0.1} readOnly></Rating>
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
            <img id="dune" src={require("../BookImg/Neuromancer.jpg")} alt="Dune"></img>
            <p>Neuromancer<br></br>by William Gibson</p>
            </div>
            <p>Your Rating</p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5}></Rating>
            <p>Overall Rating</p>
            <Rating name="read-only" value={4} precision={0.1} readOnly></Rating>
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
            <img id="dune" src={require("../BookImg/EndersGame.jpg")} alt="Dune"></img>
            <p>Ender's Game<br></br>by Orson Scott Card</p>
            </div>
            <p>Your Rating</p>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5}></Rating>
            <p>Overall Rating</p>
            <Rating name="read-only" value={4.1} precision={0.1} readOnly></Rating>
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
            <img id="dune" src={require("../BookImg/hitchhikers-guide-to-the-galaxy.png")} alt="Dune"></img>
            <p>The Hitchhiker's Guide to the Galaxy<br></br>by Douglas Adams</p>
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
            <img id="dune" src={require("../BookImg/SnowCrash.jpg")} alt="Dune"></img>
            <p>Snow Crash<br></br>by Neal Stephenson</p>
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

export default Cat1;
