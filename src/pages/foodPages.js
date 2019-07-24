import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import backImage from '../photos/food_page_background.jpg'
import {Link} from 'react-router-dom';

export class FoodPage extends Component {
    state = { 
        diseaseElements: [],
        restaurantElements: [],
        dict: {name: "", images: "", protein: "", carbs: "", 
                fat: "", calories: "", restaurants: "", diseases: "", sodium: "", id: ""}
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
          color: 'orange',
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
        let url = 'https://cors-anywhere.herokuapp.com/http://api.foodforthoughtt.me/disease';

        fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({diseaseElements: data});
        })

        url = 'https://cors-anywhere.herokuapp.com/http://api.foodforthoughtt.me/restaurant';
        fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({restaurantElements: data});
        })
        // update dictionary
        const {dict} = this.props.location.state;
        this.setState({dict});
    }
/*
    getDict () {
        let i;
        for(i = 0; i < this.state.elements.length; i++) {
            if(this.state.elements[i]["name"] === this.state.item)
                return this.state.elements[i];
        }
        return this.state.elements[0];
    }*/
    

    render() { 
        var diseaseDict = {name: "acne", symptom: "too many", age: "20", cause: "immune system overreacting", deaths: "0", frequency: "52000000", images: "https://cdn1.medicalnewstoday.com/content/images/articles/321/321218/jawline-acne.jpg"}
        var restDict = {name: "asiana indian cuisine", cost: "2", cuisine: "indian", location: "south austin", rating: "8", yelp: "379", images: "https://s3-media1.fl.yelpcdn.com/bphoto/1cG5XiNhQQDWqbAaXwRSmw/o.jpg"}
        return ( 
            <div className="img-fluid" style={this.styles.background}>
                <h1 class="display-1 ml-4" style={this.styles.header}>&nbsp;{this.state.dict.name}</h1>
                <div class="row text-left ml-5 mt-5">
                    <img class="img-thumbnail ml-4" src = {this.state.dict.images} style = {this.styles.image}/>
                    <div class="col">
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Protein:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.protein}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Fat:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.fat}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Carbs:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.carbs}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Sodium:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.sodium}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Calories:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.calories}</p>
                        </div>
                    </div>
                    <div class="col text-right mr-5">
                        <Link to={{pathname: '/RestaurantPage/15', state: {dict: restDict}}} style={this.styles.link}>Found at these Restaurants<br/></Link>
                        <Link to={{pathname: '/DiseasePage/8', state: {dict: diseaseDict}}} style={this.styles.link}>Associated diseases</Link>
                    </div>
                </div>
            </div>    
        );
    }
}


 

 



 