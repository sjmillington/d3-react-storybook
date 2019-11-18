import * as d3 from 'd3';
import React from 'react';
import styled from 'styled-components';

const ScaleExample  = styled.svg`

  rect {
    fill: steelblue;
  }

  text {
    fill: white;
    font: 10px sans-serif;
    text-anchor: middle;
  }
` 

const width = 550;
const height = 500;

const x = d3.scaleBand()
  .rangeRound([0, width])
  .padding(0.1);

const y = d3.scaleLinear()
  .range([height, 0]);



class ScaleBand extends React.Component{

  componentDidMount = () =>{
    this.drawChart();
  }

  type = d => {
    d.value = +d.value;
    return d
  }

  drawChart = () => {

    const chart = d3.select(this.refs.chart)
      .attr('width', width)
      .attr('height', height);

    d3.tsv('data/data.tsv', this.type, (error, data) => {
      x.domain(data.map(d => d.name))
      y.domain([0, d3.max(data, d => d.value)])

      const bar = chart.selectAll('g')
        .data(data)
        .enter()
          .append('g')
          .attr('transform', d => `translate(${x(d.name)},0)`)

      bar.append('rect')
        .attr('y', d => y(d.value))
        .attr('height', d => height - y(d.value))
        .attr('width', x.bandwidth())

      bar.append('text')
        .attr('x', x.bandwidth() / 2)
        .attr('y', d => y(d.value) + 3)
        .attr('dy', '.75em')
        .text(d => d.value)
    })

  }

  render(){
    return <ScaleExample ref="chart" />
  }
}

export default ScaleBand;

