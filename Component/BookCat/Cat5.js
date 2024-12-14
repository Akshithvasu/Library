import React from "react";
import NavBar from "./CatNavBar";
import './Cat1.css'
import Menu from "../Menu";
function Cat5(){
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
              <td>Sapiens</td>
              <td>Yuval Noah Harari</td>
            </tr>
            <tr>
              <td>2</td>
              <td>The Code Book</td>
              <td>Simon Singh</td>
            </tr>
            <tr>
              <td>3</td>
              <td>The Gene</td>
              <td>Siddhartha Mukherjee</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Cosmos</td>
              <td>Carl Sagan</td>
            </tr>
            <tr>
              <td>5</td>
              <td>The Innovators</td>
              <td>Walter Isaacson</td>
            </tr>
            <tr>
              <td>6</td>
              <td>The Selfish Gene</td>
              <td>Richard Dawkins</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Thinking</td>
              <td>Daniel Kahneman</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Einstein</td>
              <td>Walter Isaacson</td>
            </tr>
            <tr>
              <td>9</td>
              <td>The Immortal Life of Henrietta Lacks</td>
              <td>Rebecca Skloot</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Astrophysics for Young People in a Hurry</td>
              <td>Neil deGrasse Tyson</td>
            </tr>
        </thead>
        </table>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}
export default Cat5;