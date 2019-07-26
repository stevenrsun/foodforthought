import React, { Component, useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { Jumbotron, Container, Card, Button, CardImg, CardTitle, CardText, CardHeader,
         CardDeck, CardColumns, CardSubtitle, CardBody , NavLink, UncontrolledCarousel,
         Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Col, Row, Pagination, DropdownButton, Dropdown, Table} from 'react-bootstrap';
import * as d3 from "d3";
import { Element } from "react-faux-dom";

import BarChart from "../components/BarChart"

export default class Visualizations extends Component {
   render() {

      return (
        <div>
        <p />
        <Container>
        <h3>Food vs Calories</h3>
        <BarChart
            data={{
               AL: 45,
               CA: 50,
               CT: 31,
               FL: 24,
               GA: 45,
               LA: 40,
               MD: 37,
               MA: 32,
               NM: 30,
               NY: 44,
               NC: 33,
               OH: 38,
               PA: 41,
               SC: 30,
               TX: 42,
            }}
            x="Foods"
            y="Calories"
         />
      </Container>
      <p />
      <Container>
      <h3>Number of illnesses and pollutants in each state</h3>

      

      </Container>
      <Container>
      <h3> Comparison of Pollutants With the Highest Concentration in our Air (ug/m3)  </h3>
      </Container>
      </div>
<<<<<<< HEAD
    );
  }



=======
>>>>>>> 515170479e442cc6a7cc38c0d2315f3bde3213a1

      );
  }
}

