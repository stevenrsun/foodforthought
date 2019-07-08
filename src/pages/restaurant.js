import React from 'react';
import {NavLink} from "react-router-dom";
import '../App.css';

class restaurant extends React.Component {

  styles = {
    image: {
      width: 200,
      height: 150
    }
  };

  render() {
    return (
      <div>
        <h1>Restaurants</h1>

        <div class = "border">
          <img class = "img-thumbnail" src = {require("../restaurant_photos/ihop.jpg")} style = {this.styles.image}/>
          <NavLink to='/IHOP'>
          <h2>IHOP</h2>
          </NavLink>
        </div>

        <div class = "border">
          <img class = "img-thumbnail" src = {require("../restaurant_photos/sushijanai.jpg")} style = {this.styles.image}/>
          <NavLink to='/SushiJanai'>
          <h2>Sushi Janai</h2>
          </NavLink>
        </div>

        <div class = "border">
          <img class = "img-thumbnail" src = {require("../restaurant_photos/chipotle.jpg")} style = {this.styles.image}/>
          <NavLink to='/Chipotle'>
          <h2>Chipotle</h2>
          </NavLink>
        </div>

      </div>
    )
  }
}

export default restaurant