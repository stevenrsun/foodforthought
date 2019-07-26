import React, { Component } from 'react';
import * as d3 from "d3";
import { Element } from "react-faux-dom";

/* Source: Connect With air
   https://gitlab.com/siweimao/connect-with-nature/blob/master/frontend/Components/BarChart.js */
export default class BarChart extends Component {
  plot(chart, width, height) {
   var data = [];
   var temp = this.props.data;

   var x = this.props.x;
   var y = this.props.y;

   for (const [key, value] of Object.entries(temp)) {
      var tempDict = {};
      tempDict["statename"] = key;
      tempDict["value"] = value;
      data.push(tempDict);
   }
   // create scales!
   var barOuterPad = 0.2;
   var barPad = 0.1;
   const xScale = d3
      .scaleBand()
      .domain(data.map(d => d.statename))
      .range([0, width])
      .paddingInner(barPad)
      .paddingOuter(barOuterPad);
   const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height, 0]);
   const colorScale = d3.scaleSequential(d3.interpolateBlues);

   chart
      .selectAll(".bar-label")
      .data(data)
      .enter()
      .append("text")
      .classed("bar-label", true)
      .attr("x", d => xScale(d.statename) + xScale.bandwidth() / 2)
      .attr("dx", 0)
      .attr("y", d => yScale(d.value))
      .attr("dy", -6)

   const xAxis = d3.axisBottom().scale(xScale);

   chart
      .append("g")
      .classed("x axis", true)
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);

   const yAxis = d3
      .axisLeft()
      .ticks(5)
      .scale(yScale);

   chart
      .append("g")
      .classed("y axis", true)
      .attr("transform", "translate(0,0)")
      .call(yAxis);

   chart
      .select(".x.axis")
      .append("text")
      .attr("x", width / 2)
      .attr("y", 60)
      .attr("fill", "#000")
      .style("font-size", "20px")
      .style("text-anchor", "middle")
      .text(x);

   chart
      .select(".y.axis")
      .append("text")
      .attr("x", 0)
      .attr("y", 0)
      .attr("transform", `translate(-50, ${height / 2}) rotate(-90)`)
      .attr("fill", "#000")
      .style("font-size", "20px")
      .style("text-anchor", "middle")
      .text(y);

   const yGridlines = d3
      .axisLeft()
      .scale(yScale)
      .ticks(5)
      .tickSize(-width, 0, 0)
      .tickFormat("");

<<<<<<< HEAD
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
=======
   chart
      .append("g")
      .call(yGridlines)
      .classed("gridline", true);

      chart
       .selectAll(".bar")
       .data(data)
       .enter()
       .append("rect")
       .classed("bar", true)
       .attr("x", d => xScale(d.statename))
       .attr("y", d => yScale(d.value))
       .attr("height", d => height - yScale(d.value))
       .attr("width", d => xScale.bandwidth())
       .style("fill", (d, i) => colorScale(0.6));
  }

  drawChart() {
   const width = 1200;
   const height = 600;

   const el = new Element("div");
   const svg = d3
      .select(el)
      .append("svg")
      .attr("id", "chart")
      .attr("width", width)
      .attr("height", height);

   const margin = {
      top: 60,
      bottom: 100,
      left: 80,
      right: 40
   };

   const chart = svg
      .append("g")
      .classed("display", true)
      .attr("transform", `translate(${margin.left},${margin.top})`);

   const chartWidth = width - margin.left - margin.right;
   const chartHeight = height - margin.top - margin.bottom;
   this.plot(chart, chartWidth, chartHeight);

   return el.toReact();
>>>>>>> 515170479e442cc6a7cc38c0d2315f3bde3213a1
  }

  render() {
   return this.drawChart();
  }
}
<<<<<<< HEAD

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
=======
>>>>>>> 515170479e442cc6a7cc38c0d2315f3bde3213a1
