import React from 'react';
import {NavLink} from "react-router-dom";
import {InfoCard, InfoCardGrid} from "./components/infocard.js";
import './App.css';

class food extends React.Component {

  elements = [
    {header: 'Blueberries', image: require('./food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'data point 1',
    point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
    point5: 'data point 5', link: '/Blueberry'},
    {header: 'Seaweed', image: require('./food_photos/seaweed.jpg'), text: 'its a plant', point1: 'data point 1',
    point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
    point5: 'data point 5', link: '/Seaweed'},
    {header: 'Cranberries', image: require('./food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'data point 1',
    point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
    point5: 'data point 5', link: '/Cranberry'}
  ];

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

        <InfoCardGrid elements={this.elements}/>

      </div> 
    )
  }
}

export default food