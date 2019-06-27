import React from 'react';
import './App.css';

class Food extends React.Component {

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
          <h2>Blueberries</h2>
        </div>

        <div class = "border">
          <img class = "img-thumbnail" src = {require("./food_photos/seaweed.jpg")} style = {this.styles.image}/>
          <h2>Seaweed</h2>
        </div>

        <div class = "border"> 
          <img class = "img-thumbnail" src = {require("./food_photos/cranberries.jpg")} style = {this.styles.image}/>
          <h2>Cranberries</h2>
        </div>

      </div>
    )
  }
}

export default Food