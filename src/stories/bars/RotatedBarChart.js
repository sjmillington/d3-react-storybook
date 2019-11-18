import * as d3 from 'd3';
import React from 'react';
import styled from 'styled-components';

const Chart = styled.svg`

  rect {
    fill: steelblue;
  }

  text {
    fill: white;
    font: 10px sans-serif;
    text-anchor: middle;
  }


`

const height = 500;
const width = 550;

class RotatedBarChart extends React.Component{ 

  componentDidMount(){
    this.drawChart();
  }

  type(d){
    d.value = +d.value;
    return d;
  }

  drawChart(){

    const y = d3.scaleLinear()
      .range([height, 0]);

    const chart = d3.select(this.refs.chart)
      .attr('width', width)
      .attr('height', height)

    d3.tsv('data/data.tsv', this.type, (error, data) => {

      y.domain([0, d3.max(data, d => d.value)])

      const barWidth = width / data.length;

      const bar = chart.selectAll("g")
        .data(data)
        .enter().append('g')
          .attr('transform', (d, i) => `translate(${i * barWidth}, 0)`);

      bar.append('rect')
        .attr('y', d => y(d.value))
        .attr('height', d => height - y(d.value))
        .attr('width', barWidth - 1);

      bar.append('text')
        .attr('x', barWidth/2)
        .attr('y', d => y(d.value) + 3)
        .attr('dy', '.75em')
        .text(d => `${d.name} (${d.value})`);

    })
    

  }


  render(){
    return <Chart ref="chart"  />
  }


}

export default RotatedBarChart;