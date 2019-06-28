import React, { Component } from 'react';
import About from './about';
import Food from './food';
import Disease from './disease';
import Restaurant from './restaurant';
import {Blueberry, Seaweed, Cranberry} from './foodPages';
import logo from './index.jpeg';
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
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>Food For Thoughts</h2>
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  </div>
  
);


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

