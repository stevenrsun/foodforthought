import React from 'react';
import {NavLink} from "react-router-dom";
import {InfoCard, InfoCardGrid} from "./components/infocard.js";
import './App.css';

class food extends React.Component {

  styles = {
    image: {
      width: 200,
      height: 150
    },

    header: {
      textAlign: 'center',
      alignSelf: 'center' //if style using flexbox
    }
  };

  render() {
    return (
      
      
      <div>
        <h1 style={this.styles.header}>Food</h1>

        <InfoCardGrid />

      </div> 
    )
  }
}

export default food