import React from "react";
import NavBar from "./CatNavBar";
import './Cat1.css';
import Menu from "../Menu";
function Cat4(){
    return(
      <div className="container">
      <div className="child1">
        <Menu/>
      </div>
      <div className="child2">
          <div id="Home"></div>
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
              <td>Educated</td>
              <td>Tara Westover</td>
            </tr>
            <tr>
              <td>3</td>
              <td>The Immortal Life of Henrietta Lacks</td>
              <td>Rebecca Skloot</td>
            </tr>
            <tr>
              <td>4</td>
              <td>The Glass Castle</td>
              <td>Jeannette Walls</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Thinking</td>
              <td>Daniel Kahneman</td>
            </tr>
            <tr>
              <td>6</td>
              <td>The Wright Brothers</td>
              <td>David McCullough</td>
            </tr>
            <tr>
              <td>7</td>
              <td>The Devil in the White City</td>
              <td>Erik Larson</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Becoming</td>
              <td>Michelle Obama</td>
            </tr>
            <tr>
              <td>9</td>
              <td>A Graphic History</td>
              <td>David Vandermeulen</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Into the Wild</td>
              <td>Jon Krakauer</td>
            </tr>
        </thead>
        </table>
            </div>
        </div>
        </div>
        </div>
        </div>
        
    );
}
export default Cat4;