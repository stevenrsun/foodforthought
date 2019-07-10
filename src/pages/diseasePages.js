import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import backImage from '../food_photos/Red-blood-cells_1920x1080.jpg';
import {Link} from 'react-router-dom';

export class DiseasePage extends Component {
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
          color: 'aliceblue',
          fontSize: 100
        },

        text: {
            color: 'aliceblue',
            fontSize: 30
        },

        link: {
            color: 'tomato',
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
        var foodDict = {name: "turkey", protein: "29", fat: "7", carbs: "0.1", sodium: "5", calories: "189", images: "https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/citrus-and-butter-turkey-xl-recipe1115.jpg"}
        return ( 
            <div className="img-fluid" style={this.styles.background}>
                <h1 class="display-1 ml-4" style={this.styles.header}>&nbsp;{this.state.dict.name}</h1>
                <div class="row text-left ml-5 mt-5">
                    <img class="img-thumbnail ml-4" src = {this.state.dict.images} style = {this.styles.image}/>
                    <div class="col">
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Average age affected:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.age}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Causes:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.cause}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Deaths per year:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.deaths}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Symptoms:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.symptom}</p>
                        </div>
                        <div class="row">
                            <p class="ml-5 font-weight-bold lead" style={this.styles.text}>Diagnosed per year:</p>
                            <p class="ml-3 lead" style={this.styles.text}>{this.state.dict.frequency}</p>
                        </div>
                    </div>
                    <div class="col text-right mr-5">
                        <Link to={{pathname: '/FoodPage/13', state: {dict: foodDict}}} style={this.styles.link}>Associated foods<br/></Link>
                        <Link to='/Food' style={this.styles.link}>Associated restaurants</Link>
                    </div>
                </div>
            </div>    
        );
    }
}


 

 



 