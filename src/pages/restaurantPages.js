import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import backImage from '../photos/rest_image.jpg'
import {Link} from 'react-router-dom';

export class RestaurantPage extends Component {
    state = { 
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
        var foodDict = {name: "apple", protein: "0.3", fat: "0", carbs: "14", sodium: "1", calories: "52", images: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail.jpg"}
        return ( 
            <div className="img-fluid" style={this.styles.background}>
                <h1 class="display-1 ml-4" style={this.styles.header}>&nbsp;{this.state.dict.business_name}</h1>
                <div class="row text-left ml-5 mt-5">
                    <img class="img-thumbnail ml-4" src = {this.state.dict.images} style = {this.styles.image}/>
                    <div class="col">
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Cost:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.price_range}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Cuisine:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.category}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Location:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.address}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Rating/10:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.rating}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Yelp Reviews:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.review_count}</p>
                        </div>
                    </div>
                    <div class="col text-right mr-5">
                        <Link to={{pathname: '/FoodPage/20', state: {dict: foodDict}}} style={this.styles.link} >Food found here<br/></Link>
                        <Link to={{pathname: '/DiseasePage/10', state: {dict: diseaseDict}}} style={this.styles.link}>Associated diseases</Link>
                    </div>
                </div>
            </div>    
        );
    }
}


 

 



 