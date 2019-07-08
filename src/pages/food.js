import React from 'react';
import backImage from '../food_photos/food_page_background.jpg';
import {NavLink} from "react-router-dom";
import {InfoCard, InfoCardGrid} from "../components/infocard.js";
import '../App.css';

class food extends React.Component {

  elements = [
    {header: 'Blueberries', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'data point 1',
    point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
    point5: 'data point 5', link: '/Blueberry'},
    {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'data point 1',
    point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
    point5: 'data point 5', link: '/Seaweed'},
    {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'data point 1',
    point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
    point5: 'data point 5', link: '/Cranberry'},
    {header: 'Blueberries', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'data point 1',
    point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
    point5: 'data point 5', link: '/Blueberry'},
    {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'data point 1',
    point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
    point5: 'data point 5', link: '/Seaweed'},
    {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'data point 1',
    point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
    point5: 'data point 5', link: '/Cranberry'},
    {header: 'Blueberries', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'data point 1',
    point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
    point5: 'data point 5', link: '/Blueberry'},
    {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'data point 1',
    point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
    point5: 'data point 5', link: '/Seaweed'},
    {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'data point 1',
    point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
    point5: 'data point 5', link: '/Cranberry'}
  ];

  styles = {
    image: {
      width: 200,
      height: 150
    },

    background:{
      backgroundImage: `url(${backImage}`,
      height: '220vh',
      width: '100vw',
      overflow: 'hidden',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    },

    header: {
      textAlign: 'center',
      color: 'aliceblue',
      fontSize: 150
    },
  };

  render() {
    return (
      
      
      <div className="img-fluid" style={this.styles.background}>
        <h1 class="display-1" style={this.styles.header}>Food</h1>

        <InfoCardGrid elements={this.elements}/>
        <p>a<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
      </div> 
    )
  }
}

export default food