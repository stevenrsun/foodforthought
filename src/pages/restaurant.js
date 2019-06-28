import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Container, Card, Button, CardImg, CardTitle, CardText,
   CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';

styles = {
  image: {
    width: 200,
    height: 150
  }
};

class Restaurant extends React.Component {
  render() {
    return (
      <div>
        <h1>Restaurant</h1>
        <p>kasdhfksajhdlfka</p>
      </div>
    )
  }
}

export default Restaurant