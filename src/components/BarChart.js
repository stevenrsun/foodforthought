import React, { Component } from 'react';
import * as d3 from "d3";
import d3Tip  from "d3-tip";



//This code is modified from Simple d3.js bar chart D3: http://bl.ocks.org/d3noob/8952219#bar-data.csv
//with rainbow function from this codepen: https://codepen.io/chadoh/pen/NRXpKw

class BarChart extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      bottomText: "Loading...",
      data: []
    };
  }

  async componentDidMount() {
    try {
      // call API
      let url = 'https://cors-anywhere.herokuapp.com/http://api.foodforthoughtt.me/food';
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    }

    var arr = []
    for (let i=0; i < this.state.data.length; i++) {
      const it = parseInt(this.state.data[i]['calories']);
      arr.push(it)
    }

    this.drawBarChart(arr);
  }

  drawBarChart(data)  {
    const canvasHeight = 400
    const canvasWidth = 600
    const scale = 5
    const svgCanvas = d3.select(this.refs.canvas)
        .append("svg")
        .attr("width", canvasWidth)
        .attr("height", canvasHeight)
        .style("border", "1px solid black")
    svgCanvas.selectAll("rect")
        .data(data).enter()
            .append("rect")
            .attr("width", 40)
            .attr("height", (datapoint) => datapoint * scale)
            .attr("fill", "orange")
            .attr("x", (datapoint, iteration) => iteration * 45)
            .attr("y", (datapoint) => canvasHeight - datapoint * scale)
    
    svgCanvas.selectAll("text")
      .data(data).enter()
          .append("text")
          .attr("x", (dataPoint, i) => i * 45 + 10)
          .attr("y", (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
          .text(dataPoint => dataPoint)
  }

  render() { 
    return <div ref="canvas"></div> 
  }
}

export default BarChart;
