import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Container, Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody
  } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Restaurant from './pages/restaurant'
import Disease from './pages/disease'
import Food from './pages/food'
import About from './pages/about'
import Home from './App';

export default class NavBar extends React.Component {
  render(){
    return (
      <div>
        <Router>
          <Navbar color="dark" dark>
            <NavbarBrand href="/">Food for Thought </NavbarBrand>
              <Nav pills>
                <NavItem>
                  <NavLink href="/Food">Food</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Disease">Disease</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Restaurant">Restaurant</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/About">About</NavLink>
                </NavItem>
              </Nav>
          </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/Food" component={Food} />
        <Route path="/Disease" component={Disease} />
        <Route path="/Restaurant" component={Restaurant} />
        <Route path="/About" component={About} />
        </Router>
      </div>
    );
  }
}
