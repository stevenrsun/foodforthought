import React, { Component } from 'react';
import * as d3 from "d3";
import d3Tip  from "d3-tip";


//This code is modified from Simple d3.js bar chart D3: http://bl.ocks.org/d3noob/8952219#bar-data.csv
//with rainbow function from this codepen: https://codepen.io/chadoh/pen/NRXpKw

class BarChart extends Component
{
  constructor(props) {
    super(props);
    this.state =
    {
      isLoaded: false,
      bottomText: "Loading...",
    };
  }

  drawBarGraph()
  {
    var margin = {top: 20, right: 20, bottom: 200, left: 40},
      width = 1250 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

    var pad = 20, left_pad = 100;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(10);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    var svg = d3.select(this.props.label).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

    var data = this.props.data;



    x.domain(data.map(function(d) { return d.label; }));
    y.domain([0, d3.max(data, function(d) { return d.value; })]);

    const tip = d3Tip()
      .attr('class', 'd3-tip')
      .offset([-13, 0])
      .html(function(d) {
        return d.label + ": <span style='color:orangered'>" + d.value + "</span>";
      });
    svg.call(tip);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

  .selectAll("text")
          .style("text-anchor", "end")
          .attr("dx", "-.8em")
          .attr("dy", ".15em")
          .attr("transform","rotate(-65)")
          .style("font-size","15px");



    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(this.props.y);

    svg.selectAll("bar")
        .data(data)
      .enter().append("rect")
        .attr('style', function (d) { return 'fill:hsl('+(x(d.label)-left_pad)*(360/(width-left_pad-pad))+',100%,65%)' })
        .attr("x", function(d) { return x(d.label); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);
  }

  componentDidUpdate()
  {
    if (this.props.isLoaded && !this.state.isLoaded)
    {
      this.drawBarGraph();

      this.setState({
        isLoaded : true,
        bottomText: this.props.x,
      });
    }
  }


  render()
  {
    return (
      <div>

      <h2>{this.state.bottomText}</h2>
        <br/>
      </div>
    );
  }
}

export default BarChart;
