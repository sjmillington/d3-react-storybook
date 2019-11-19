import * as d3 from 'd3';
import React from 'react';
import styled from 'styled-components';

const AxeChart  = styled.svg`

  .bar{
    fill: steelblue;
  }

  .axis {

    text {
      font: 10px sans-serif;
    }

    path, line {
      fill: none;
      stroke: #000;
      shape-rendering: crispEdges;
    }

    path {
      display: none;
    }

  }

 
` 

var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

const x = d3.scaleBand()
  .rangeRound([0, width])
  .padding(0.1);

const y = d3.scaleLinear()
  .range([height, 0]);

const xAxis = d3.axisBottom()
  .scale(x);

const yAxis = d3.axisLeft()
  .scale(y)
  .ticks(20)

class WithAxes extends React.Component{

  componentDidMount = () =>{
    this.drawChart();
  }

  type = d => {
    d.value = +d.value;
    return d
  }

  drawChart = () => {

    const chart = d3.select(this.refs.chart)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left},${margin.right})`);

    d3.tsv('data/data.tsv', this.type).then(data => {

      console.log(data)
      x.domain(data.map(d => d.name))
      y.domain([0, d3.max(data, d => d.value)])

      chart.append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis)

      chart.append('g')
          .attr('class', 'y axis')
          .call(yAxis)
        .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '.71em')
          .style('text-anchor', 'end')
          .text('MY LABEL')

      chart.selectAll('.bar')
          .data(data)
        .enter().append('rect')
          .attr('class', 'bar')
          .attr('x', d => x(d.name))
          .attr('y', d => y(d.value))
          .attr('height', d => height - y(d.value))
          .attr('width', x.bandwidth())
    })

  }

  render(){
    return <AxeChart ref="chart" />
  }
}

export default WithAxes;

