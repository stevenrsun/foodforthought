import React from 'react';
import {NavLink} from "react-router-dom";
import './App.css';

class food extends React.Component {

  styles = {
    image: {
      width: 200,
      height: 150
    }
  };

  render() {
    return (
      <div>
        <h1>Food</h1>

        <div class = "border">
          <img class = "img-thumbnail" src = {require("./food_photos/blueberries.jpg")} style = {this.styles.image}/>
          <NavLink to='/Blueberry'>
          <h2>Blueberries</h2>
          </NavLink>
        </div>

        <div class = "border">
          <img class = "img-thumbnail" src = {require("./food_photos/seaweed.jpg")} style = {this.styles.image}/>
          <NavLink to='/Seaweed'>
          <h2>Seaweed</h2>
          </NavLink>
        </div>

        <div class = "border"> 
          <img class = "img-thumbnail" src = {require("./food_photos/cranberries.jpg")} style = {this.styles.image}/>
          <NavLink to='/Cranberry'>
          <h2>Cranberries</h2>
          </NavLink>
        </div>

      </div>
    )
  }
}

export default food