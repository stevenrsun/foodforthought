import React, { Component } from 'react';
import {Tabs, Tab} from "react-bootstrap";
import * as d3 from 'd3';
import BarChart from '../components/BarChart'

export class Visualizations extends Component
{
  constructor(props)
  {
    super();
    this.state = {
        activeTab: "foodKey",
        foodData: [],
        foodBarDataLoaded: false
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedTab)
  {
    this.setState({
      activeTab: selectedTab
    });
  }

  // food
  foodBar ()
  {
    return (
      <div>
        <div className="pageBox" align="center">
          <br />
          <h2><b>Food</b></h2>
          <br />
          <BarChart data = {this.state.foodData}  isLoaded = {this.state.foodBarDataLoaded}  x = "Food" y = "Calories" label = "FoodChart"/>
          <br />
        </div>
      </div>
    );
  }




  render (){
    return (
        <Tabs className="tab" activeKey={this.state.activeTab} onSelect={this.handleSelect}>
            <Tab className="tabBackground" eventKey="foodKey" title="Food title">
            <br/>
                {/* {this.foodBar()} */}
                <BarChart />
            <br/>
            </Tab>
        </Tabs>
    );
  }
}

