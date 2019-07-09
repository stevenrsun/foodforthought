import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import backImage from '../food_photos/food_page_background.jpg'
import {Link} from 'react-router-dom';

export class FoodPage extends Component {
    state = { 
        elements: [
            {header: 'Blueberries page 1', image: require('../food_photos/blueberries.jpg'), text: 'it\'s blue!', point1: 'test: lots of info',
            point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
            point5: 'data point 5', link: '/FoodPage', index: 0},
            {header: 'Seaweed', image: require('../food_photos/seaweed.jpg'), text: 'its a plant', point1: 'test: lots of info',
            point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
            point5: 'data point 5', link: '/FoodPage', index: 1},
            {header: 'Cranberries', image: require('../food_photos/cranberries.jpg'), text: 'delicious and red', point1: 'test: lots of info',
            point2: 'data point 2', point3: 'data point 3', point4: 'data point 4',
            point5: 'data point 5', link: '/FoodPage', index: 2},
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
        index: 0
    }

    styles = {
        image: {
          width: 401,
          height: 300
        },
    
        background:{
          backgroundImage: `url(${backImage}`,
          height: '100vh', // 220 vh
          width: '100vw',
          overflow: 'hidden',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        },
    
        header: {
          textAlign: 'left',
          color: 'aliceblue',
          fontSize: 100
        },

        text: {
            color: 'aliceblue',
            fontSize: 30
        },

        link: {
            color: 'orange',
            fontSize: 50
        }
    };

    componentDidMount () {
        const {index} = this.props.location.state;
        this.setState({index});
    }
    render() { 
        return ( 
            <div className="img-fluid" style={this.styles.background}>
                <h1 class="display-1 ml-4" style={this.styles.header}>&nbsp;{this.state.elements[this.state.index].header}</h1>
                <div class="row text-left ml-5 mt-5">
                    <img class="img-thumbnail ml-4" src = {this.state.elements[this.state.index].image} style = {this.styles.image}/>
                    <div class="col">
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Point 1:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.elements[this.state.index].point1}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Point 2:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.elements[this.state.index].point2}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Point 3:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.elements[this.state.index].point3}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Point 4:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.elements[this.state.index].point4}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Point 5:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.elements[this.state.index].point5}</p>
                        </div>
                    </div>
                    <div class="col text-right mr-5">
                        <Link to='/' style={this.styles.link}>Example Link 1 <br/></Link>
                        <Link to='/Food' style={this.styles.link}>Example Link 2</Link>
                    </div>
                </div>
            </div>    
        );
    }
}

export class Blueberry extends Component {

    styles = {
        image: {
          width: 200,
          height: 150
        }
      };

    render() { 
        return (  
            <div>
                <h1>Blueberries</h1>
                <img class = "img-thumbnail" src = {require("../food_photos/blueberries.jpg")} style = {this.styles.image}/>
                <h5>Kcal:</h5>
                <p>85 per 1 cup (185 g)</p>
                <h5>Macronutrients:</h5>
                <p>Fat: 0.5 g</p>
                <p>Carbohydrates: 21 g</p>
                <p>Protein: 1.1 g</p>
                <h5>Sugar/Sodium:</h5>
                <p>Sugars: 15 g</p>
                <p>Sodium: 1 mg</p>
                <h5>Related Diseases:</h5>
                <NavLink to="/Diabetes">
                <p>Diabetes</p>
                </NavLink>
                <h5>Restaurants:</h5>
                <NavLink to="/IHOP">
                <p>IHOP</p>
                </NavLink>
            </div>
        );
    }
}


export class Seaweed extends Component {

    styles = {
        image: {
          width: 200,
          height: 150
        }
      };

    render() { 
        return (  
            <div>
                <h1>Seaweed</h1>
                <img class = "img-thumbnail" src = {require("../food_photos/seaweed.jpg")} style = {this.styles.image}/>
                <h5>Kcal:</h5>
                <p>306 per 100 g</p>
                <h5>Macronutrients:</h5>
                <p>Fat: 0.3 g</p>
                <p>Carbohydrates: 81 g</p>
                <p>Protein: 6 g</p>
                <h5>Sugar/Sodium:</h5>
                <p>Sugars: 3 g</p>
                <p>Sodium: 102 mg</p>
                <h5>Related Diseases:</h5>
                <NavLink to="/HypoThy">
                <p>Hypothyroidism</p>
                </NavLink>
                <h5>Restaurants:</h5>
                <NavLink to="/SushiJanai">
                <p>Sushi Janai</p>
                </NavLink>
            </div>
        );
    }
}

export class Cranberry extends Component {

    styles = {
        image: {
          width: 200,
          height: 150
        }
      };

    render() { 
        return (
            <div>
                <h1>Cranberries</h1>
                <img class = "img-thumbnail" src = {require("../food_photos/cranberries.jpg")} style = {this.styles.image}/>
                <h5>Kcal:</h5>
                <p>25 per 1/2 cup (55 g)</p>
                <h5>Macronutrients:</h5>
                <p>Fat: 0.07 g</p>
                <p>Carbohydrates: 6.6 g</p>
                <p>Protein: 0.25 g</p>
                <h5>Sugar/Sodium:</h5>
                <p>Sugars: 2.35 g</p>
                <p>Sodium: 1 mg</p>
                <h5>Related Diseases:</h5>
                <NavLink to="/UTI">
                <p>Urinary Tract Infection (UTI)</p>
                </NavLink>
                <h5>Restaurants:</h5>
                <NavLink to="/IHOP">
                <p>IHOP</p>
                </NavLink>
            </div>
        );
    }
}
 

 



 