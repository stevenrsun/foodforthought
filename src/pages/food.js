import React from 'react';
import backImage from '../food_photos/food_page_background.jpg';
import {NavLink} from "react-router-dom";
import {InfoCard, InfoCardGrid} from "../components/infocard.js";
import {PageNav} from '../components/pageNav.js';
import '../App.css';

class food extends React.Component {
  state = {
    elements: [
      {header: 'Blueberries page 1', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/FoodPage'},
      {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/FoodPage'},
      {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/FoodPage',},
      {header: 'Blueberries', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Blueberry'},
      {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Seaweed'},
      {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Cranberry'},
      {header: 'Blueberries', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Blueberry'},
      {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Seaweed'},
      {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Cranberry'},
      
      {header: 'Blueberries page 2', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Blueberry'},
      {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Seaweed'},
      {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Cranberry'},
      {header: 'Blueberries', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Blueberry'},
      {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Seaweed'},
      {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Cranberry'},
      {header: 'Blueberries', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Blueberry'},
      {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Seaweed'},
      {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Cranberry'},

      {header: 'Blueberries page 3', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Blueberry'},
      {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Seaweed'},
      {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Cranberry'},
      {header: 'Blueberries', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Blueberry'},
      {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Seaweed'},
      {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Cranberry'},
      {header: 'Blueberries', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Blueberry'},
      {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Seaweed'},
      {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'test: lots of info',
      point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
      point5: 'data point 5', link: '/Cranberry'}
    ],

    page: 0,

    link: '/FoodPage'
  }
  
  incrementPage = () => {
    const page = this.state.page + 1;
    this.setState({page});
  }

  decrementPage = () => {
    const page = this.state.page - 1;
    this.setState({page});
  }

  goFirstPage = () => {
    const page = 0;
    this.setState({page});
  }

  goLastPage = () => {
    const page = this.state.elements.length/9 - 1;
    this.setState({page});
  }

  styles = {
    image: {
      width: 200,
      height: 150
    },

    background:{
      backgroundImage: `url(${backImage}`,
      height: '220vh', // 220 vh
      width: '100vw',
      overflow: 'auto',
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

        <InfoCardGrid link={this.state.link} elements={this.state.elements} currentPage={this.state.page}/>
        <PageNav label='Food Page Navigator' page={this.state.page} decrementPage = {this.decrementPage}
         incrementPage = {this.incrementPage} lastPage={this.state.elements.length/9} goFirstPage = {this.goFirstPage} goLastPage = {this.goLastPage}/>
        
      </div> 
    )
  }
}

export default food