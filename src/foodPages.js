import React, { Component } from 'react';

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
                <img class = "img-thumbnail" src = {require("./food_photos/blueberries.jpg")} style = {this.styles.image}/>
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
                <p>Diabetes</p>
                <h5>Restaurants:</h5>
                <p>IHOP</p>
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
                <img class = "img-thumbnail" src = {require("./food_photos/seaweed.jpg")} style = {this.styles.image}/>
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
                <p>Hypothyroidism</p>
                <h5>Restaurants:</h5>
                <p>Sushi Janai</p>
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
                <img class = "img-thumbnail" src = {require("./food_photos/cranberries.jpg")} style = {this.styles.image}/>
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
                <p>Urinary Tract Infection</p>
                <h5>Restaurants:</h5>
                <p>IHOP</p>
            </div>
        );
    }
}
 

 


