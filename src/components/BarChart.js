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
      // wait for response
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    }

    var labels = []
    var values = []
    for (let i=0; i < this.state.data.length; i++) {
      labels.push(this.state.data[i]['name'])
      values.push(this.state.data[i]['calories'])
    }
    this.drawBarChart(labels, values);
  }

  drawBarChart(labels, data)  {
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

// import React from 'react'
// import rd3 from 'react-d3-library'
// import * as d3 from 'd3'

// const RD3Component = rd3.Component;

// async function loadChart() {
//     var node = document.createElement('div');

//     const apiData = await d3.json("https://cors-anywhere.herokuapp.com/http://api.foodforthoughtt.me/food")

//     var data = []
//     for (let i=0; i < apiData.length; i++) {
//       data.push({name: this.state.data[i]['name'], value: this.state.data[i]['calories']})
//     }

//     var margin = ({top: 30, right: 0, bottom: 10, left: 300})

//     var width = 800;
//     var height = data.length * 25 + margin.top + margin.bottom

//     var svg = d3.select(node).append("svg")
//       .attr("width", width)
//       .attr("height", height);
    
//     const x = d3.scaleLinear()
//         .domain([0, d3.max(data, d => d.value)])
//         .range([margin.left, width - margin.right]) 
    
//     const y = d3.scaleBand()
//         .domain(data.map(d => d.name))
//         .range([margin.top, height - margin.bottom])
//         .padding(0.1)
    
//     const xAxis = g => g
//         .attr("transform", `translate(0,${margin.top})`)
//         .call(d3.axisTop(x).ticks(width / 80))
//         .call(g => g.select(".domain").remove())

//     const yAxis = g => g
//         .attr("transform", `translate(${margin.left},0)`)
//         .call(d3.axisLeft(y).tickSizeOuter(0))

//     const format =  x.tickFormat(20);

    
//     svg.append("g")
//         .attr("fill", "steelblue")
//         .selectAll("rect")
//         .data(data)
//         .join("rect")
//             .attr("x", x(0))
//             .attr("y", d => y(d.name))
//             .attr("width", d => x(d.value) - x(0))
//             .attr("height", y.bandwidth());
    
//     svg.append("g")
//             .attr("fill", "white")
//             .attr("text-anchor", "end")
//             .style("font", "12px sans-serif")
//         .selectAll("text")
//         .data(data)
//         .join("text")
//             .attr("x", d => x(d.value) - 4)
//             .attr("y", d => y(d.name) + y.bandwidth() / 2)
//             .attr("dy", "0.35em")
//             .text(d => format(d.value));
    
//     svg.append("g")
//         .call(xAxis);
    
//     svg.append("g")
//         .call(yAxis);

//     return node;
    
    
// }

// export default class HorizontalBarChart extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {d3: ''}
//     }
  
//     componentDidMount() {
//       loadChart().then((result) => {
//         this.setState({d3: result});
//       })
//     }
  
//     render() {
//       return(<div><RD3Component data={this.state.d3}/></div>)
//     }
//   }
