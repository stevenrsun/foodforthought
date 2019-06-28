import React, { Component } from 'react';
import About from './about';
import Food from './food';
import Disease from './disease';
import Restaurant from './restaurant';
import logo from './thumb16.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

var sectionStyle = {
  width: "100%",
  height: "320px",
  backgroundImage: `url(${logo})`
};
class Navbar extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/Food'} className="nav-link">Food</Link></li>
            <li><Link to={'/Disease'} className="nav-link">Disease</Link></li>
            <li><Link to={'/Restaurant'} className="nav-link">Restaurant</Link></li>
            <li><Link to={'/About'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Food' component={Food} />
              <Route exact path='/Disease' component={Disease} />
              <Route exact path='/Restaurant' component={Restaurant} />
              <Route exact path='/About' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  
  <div>
    <section style={ sectionStyle }></section>
    <div>
    <center><h2>Food For Thought</h2></center>
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

