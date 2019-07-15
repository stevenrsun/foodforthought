import React from 'react';
import {
  NavbarBrand,
  Nav,
  NavItem,
  Jumbotron,
  Container, Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody
  } from 'reactstrap';
import {Form, FormControl} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './App';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import About from './about';
import Food from './pages/food';
import Disease from './pages/disease';
import Restaurant from './pages/restaurant';
import {FoodPage} from './pages/foodPages';
import {DiseasePage} from './pages/diseasePages';
import {RestaurantPage} from './pages/restaurantPages';

export class Navbar extends React.Component {
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
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Food' component={Food} />
              <Route exact path='/Restaurant' component={Restaurant} />
              <Route exact path='/Disease' component={Disease} />
              <Route exact path='/About' component={About} />
              <Route path='/FoodPage' component={FoodPage} />
              <Route path='/FoodPage/:id' component={FoodPage}/>
              <Route path='/DiseasePage' component={DiseasePage} />
              <Route path='/DiseasePage/:id' component={DiseasePage}/>
              <Route path='/RestaurantPage' component={RestaurantPage} />
              <Route path='/RestaurantPage/:id' component={RestaurantPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}