import React from 'react';
import {NavLink} from "react-router-dom";
import '../App.css';

class disease extends React.Component {
  styles = {
    image: {
      width: 300,
      height: 300
    }
  };

  render() {
    return (
      <div>
        <h1>Diseases</h1>

        <img class = "img-thumbnail" src = {require("../disease_logo.png")} style = {this.styles.image}/>

        <div class = "border">
          <NavLink to='/Diabetes'>
          <h2>Diabetes</h2>
          </NavLink>
        </div>

        <div class = "border">
          <NavLink to='/UTI'>
          <h2>Urinary Tract Infection (UTI)</h2>
          </NavLink>
        </div>

        <div class = "border">
          <NavLink to='/HypoThy'>
          <h2>Hypothyroidism</h2>
          </NavLink>
        </div>

      </div>
    )
  }
}

export default disease