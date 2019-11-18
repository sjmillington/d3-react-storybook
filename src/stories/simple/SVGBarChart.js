import * as d3 from 'd3';
import React from 'react';
import styled from 'styled-components';

const barHeight = 20;
const chartWidth = 420;

const Chart = styled.svg`

  rect {
    fill: steelblue;
  }

  text {
    fill: white;
    font: 10px sans-serif;
    text-anchor: end;
  }

`

class SVGBarChart extends React.Component{

  componentDidMount(){

     this.drawChart();
  }

  drawChart(){
    const data = this.props.data;

    const x = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, chartWidth]);

    const chart = d3.select(this.refs.myDiv)
      .attr("width", chartWidth)
      .attr("height", barHeight * data.length);

    const bar = chart.selectAll("g")
      .data(data)
      .enter() 
        .append("g")
        .attr("transform", (d, i) => `translate(0, ${i*barHeight})`);

    bar.append("rect")
      .attr("width", x)
      .attr("height", barHeight - 1);

    bar.append("text")
      .attr("x", d => x(d) - 3)
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(d => d);
  }

  render(){
    return (
      <Chart width={chartWidth} ref="myDiv" />
    )
  }

}

export default SVGBarChart;