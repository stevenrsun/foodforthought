import React, { Component, useState, useEffect } from 'react';
import {Tabs, Tab} from "react-bootstrap";
import ReactDOM from "react-dom";
import { Jumbotron, Container, Card, Button, CardImg, CardTitle, CardText, CardHeader,
         CardDeck, CardColumns, CardSubtitle, CardBody , NavLink, UncontrolledCarousel,
         Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Col, Row, Pagination, DropdownButton, Dropdown, Table} from 'react-bootstrap';
import * as d3 from "d3";
import { Element } from "react-faux-dom";

import BarChart from "../components/BarChart"
import BubbleChart from "../components/BubbleChart"
import BubbleChart2 from "../components/BubbleChart2"

export default class Visualizations extends Component {
   constructor(props)
  {
    super(props);
    this.state = {
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedTab)
  {
    this.setState({
      activeTab: selectedTab
    });
  }

   render() {

      return (
         <Tabs className="tab" activeKey={this.state.activeTab} onSelect={this.handleSelect}>
            <Tab className="tabBackground" eventKey="food" title="Our visualizations">
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
               <h3>Rating of Austin Yelp Restaurants</h3>
               <BarChart
                     data={{
                        '3.0': 2,
                        '3.5': 16,
                        '4.0': 91,
                        '4.5': 89,
                        '5.0': 11
                     }}
                     x="Yelp Rating"
                     y="Number of Restaurants in Austin"
                  />
               </Container>
               </div>
            </Tab>
            <Tab className="tabBackground" eventKey="degree" title="DegreeForMe Visualizations">
            <Container>
               <h3>Median Age in Cities</h3>
               <BarChart
                     data={{
                        '20-25': 28,
                        '25-30': 75,
                        '30-35': 320,
                        '35-40': 407,
                        '40-45': 123,
                        '45-50': 27,
                        '50-55': 4
                     }}
                     x="Median Age"
                     y="Number of Cities"
                  />
               </Container>
               <Container>
                  <h3>Estimated Mid-level salary for a given degree</h3>
                  <BubbleChart2/>
               </Container>
            </Tab>
         </Tabs>


        

      );
  }
}

