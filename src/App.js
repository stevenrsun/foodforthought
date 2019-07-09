import React, { Component } from 'react';
import About from './about';
import Food from './pages/food';
import Disease from './pages/disease';
import Restaurant from './pages/restaurant';
import {Blueberry, Seaweed, Cranberry, FoodPage} from './pages/foodPages';
import {Ihop, SushiJanai, Chipotle} from './pages/restaurantPages';
import {Diabetes, UTI, HypoThy} from './pages/diseasePages';
import logo from './home_image.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><NavLink to={'/Food'} className="nav-link">Food</NavLink></li>
            <li><Link to={'/Disease'} className="nav-link">Disease</Link></li>
            <li><NavLink to='/Restaurant' className="nav-link">Restaurant</NavLink></li>
            <li><NavLink to={'/About'} className="nav-link">About</NavLink></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Food' component={Food} />
              <Route exact path='/Disease' component={Disease} />
              <Route exact path='/Restaurant' component={Restaurant} />
              <Route exact path='/About' component={About} />
              <Route path='/Blueberry' component={Blueberry} />
              <Route path='/Seaweed' component={Seaweed} />
              <Route path='/Cranberry' component={Cranberry} />
              <Route path='/IHOP' component={Ihop} />
              <Route path='/SushiJanai' component={SushiJanai} />
              <Route path='/Chipotle' component={Chipotle} />
              <Route path='/Diabetes' component={Diabetes} />
              <Route path='/UTI' component={UTI} />
              <Route path='/HypoThy' component={HypoThy} />
              <Route path='/FoodPage' component={FoodPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
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
          <a class="btn btn-warning ml-5 mt-2" href="/Food" role="button">Foods</a>
          <a class="btn btn-warning ml-4 mt-2" href="/Restaurant" role="button">Restaurants</a>
          <a class="btn btn-warning ml-4 mt-2" href="/Disease" role="button">Diseases</a>
          <a class="btn btn-warning ml-4 mt-2" href="/About" role="button">About Us</a>
        </div>
    </div>
  </div>
  
);

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

