import React, { Component, useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { Jumbotron, Container, Card, Button, CardImg, CardTitle, CardText, CardHeader,
         CardDeck, CardColumns, CardSubtitle, CardBody , NavLink, UncontrolledCarousel,
         Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Col, Row, Pagination, DropdownButton, Dropdown, Table} from 'react-bootstrap';
import * as d3 from "d3";
import { Element } from "react-faux-dom";

import BarChart from "../components/BarChart"
import BubbleChart from "../components/BubbleChart"

export default class Visualizations extends Component {
   constructor(props)
  {
    super(props);
    this.state = {
        foods: []
    };
  }

   render() {

      return (
        <div>
        <p />
        <Container>
        <h3>Calories in foods</h3>
        <BarChart
            data={{
               Blueberry: 57,
               Cranberry: 46,
               Blackberry: 43,
               Raspberry: 53,
               Apple: 52,
               Orange: 47,
               Papaya: 39,
               Avocado: 160,
               Beet: 43,
               Flaxseed: 55,
               Salmon: 208,
               Tuna: 144,
               SeaBass: 97,
               Garlic: 133,
               Broccoli: 34,
            }}
            x="Foods"
            y="Calories"
         />
      </Container>
      <p />
      <Container>
      <h3>Estimated number of people diagnosed with a disease per year </h3>
      <BubbleChart/>
      

      </Container>
      <Container>
      <h3>Rating of Austin Yelp Restaurants by Price Range</h3>
        <BarChart
            data={{
               3: 2,
               3.5: 16,
               4: 91,
               4.5: 89,
               5: 11
            }}
            x="Foods"
            y="Calories"
         />
      </Container>
      </div>

      );
  }
}

