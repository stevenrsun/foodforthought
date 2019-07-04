import React, { Component } from 'react';

export class Ihop extends Component {

    styles = {
        image: {
          width: 200,
          height: 150
        }
      };

    render() { 
        return (  
            <div>
                <h1>IHOP</h1>
                <img class = "img-thumbnail" src = {require("./components/restaurant_photos/ihop.jpg")} style = {this.styles.image}/>
                <h5>Location:</h5>
                <p>707 E Cesar Chavez St, Austin, TX</p>
                <h5>Cuisine:</h5>
                <p>American (breakfast)</p>
                <h5>Cost ($-$$$$$)</h5>
                <p>$$</p>
                <h5>Contact:</h5>
                <p>(512) 478-9520</p>
                <h5>Rating (Google Reviews)</h5>
                <p>3.7/5</p>
            </div>
        );
    }
}

export class SushiJanai extends Component {

    styles = {
        image: {
          width: 200,
          height: 150
        }
      };

    render() { 
        return (  
            <div>
                <h1>Sushi Janai</h1>
                <img class = "img-thumbnail" src = {require("./components/restaurant_photos/sushijanai.jpg")} style = {this.styles.image}/>
                <h5>Location:</h5>
                <p>1612 Lavaca St, Austin, TX</p>
                <h5>Cuisine:</h5>
                <p>Japanese (Seafood)</p>
                <h5>Cost ($-$$$$$)</h5>
                <p>$$$</p>
                <h5>Contact:</h5>
                <p>(512) 322-2428</p>
                <h5>Rating (Google Reviews)</h5>
                <p>4.4/5</p>
            </div>
        );
    }
}

export class Chipotle extends Component {

    styles = {
        image: {
          width: 200,
          height: 150
        }
      };

    render() { 
        return (  
            <div>
                <h1>Chipotle</h1>
                <img class = "img-thumbnail" src = {require("./components/restaurant_photos/chipotle.jpg")} style = {this.styles.image}/>
                <h5>Location:</h5>
                <p>2230 Guadalupe St, Austin, TX</p>
                <h5>Cuisine:</h5>
                <p>Mexican (Grill)</p>
                <h5>Cost ($-$$$$$)</h5>
                <p>$</p>
                <h5>Contact:</h5>
                <p>(512) 320-0238</p>
                <h5>Rating (Google Reviews)</h5>
                <p>4/5</p>
            </div>
        );
    }
}