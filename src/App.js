import React, { Component } from 'react';
import About from './about';
import Food from './pages/food';
import Disease from './pages/disease';
import Restaurant from './pages/restaurant';
import {FoodPage} from './pages/foodPages';
import {DiseasePage} from './pages/diseasePages';
import {RestaurantPage} from './pages/restaurantPages'
import Visualizations from './pages/visualizations'
import logo from './photos/home_image.jpg';
import './App.css';
import {Form,Button, FormControl} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import { SearchResults } from './pages/searchResults';
import * as d3 from 'd3';

class Navbar extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><NavLink to={'/'} className="nav-link"> Home </NavLink></li>
            <li><NavLink to={'/Food'} className="nav-link">Food</NavLink></li>
            <li><NavLink to={'/Disease'} className="nav-link">Disease</NavLink></li>
            <li><NavLink to={'/Restaurant'} className="nav-link">Restaurant</NavLink></li>
            <li><NavLink to={'/Visualizations'} className="nav-link">Visualizations</NavLink></li>
            <li><NavLink to={'/About'} className="nav-link">About</NavLink></li>
          </ul>
          </nav>
          <hr/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Food' component={Food} />
              <Route exact path='/Restaurant' component={Restaurant} />
              <Route exact path='/Disease' component={Disease} />
              <Route exact path='/Visualizations' component={Visualizations} />
              <Route exact path='/About' component={About} />
              <Route path='/FoodPage' component={FoodPage} />
              <Route path='/FoodPage/:id' component={FoodPage}/>
              <Route path='/DiseasePage' component={DiseasePage} />
              <Route path='/DiseasePage/:id' component={DiseasePage}/>
              <Route path='/RestaurantPage' component={RestaurantPage} />
              <Route path='/RestaurantPage/:id' component={RestaurantPage}/>
              <Route path='/SearchResults' component={SearchResults}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export class Home extends Component {
  state = {
    elements: [],
    searchParams: ''
  }

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }


  search = (value) => {  
    // let url = 'https://cors-anywhere.herokuapp.com/http://api.foodforthoughtt.me/search';
    // fetch(url, { 
    //   method: 'post',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   },
    //   // body: JSON.stringify([value])
    //   body: [value]
    // })
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({searchResult: data});
    // })
  }

  render() {
    return (
      <div className="img-fluid" style={styles.image}>
      <div class="container-fluid">
          <div class="row">
            <h1 class="display-1" style = {styles.header}>
              &nbsp;Food
              <small style={{color:'orange'}}> for Thought</small>
            </h1>
          </div>
          <div class="row">
            <p class="lead text-left" style={styles.text}><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bringing people closer to health and great food, 
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;one click at a time.</p>
          </div>
          <div class="row">
            <p class="lead text-left" style={styles.text}><br/>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Begin your journey with a category you're interested in:</p>
          </div>
          <div class="row">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className="ml-4">
              <Link class='mr-4' to={{pathname: '/Food', state: {params: this.state.searchParams}}}>
                <Button style={{color: 'black'}} variant="warning" onSubmit={this.search(this.state.searchParams)}>Explore Foods</Button>
              </Link>
              <Link to={{pathname: '/Restaurant', state: {params: this.state.searchParams}}}>
                <Button style={{color: 'black'}} variant="warning" onSubmit={this.search(this.state.searchParams)}>Explore Restaurants</Button>
              </Link>
            <p>{this.state.workInProgress}</p>
            </div>
          </div>
      </div>
    </div>
    )
  }
}


var styles = {
  image: {
    backgroundImage: `url(${logo}`,
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },

  header: {
    textAlign: 'left',
    color: 'aliceblue',
    fontSize: 150
  },

  text: {
    color: 'aliceblue',
    fontSize: 30
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar/>
      </div>
    )
  }
}

export default App;

