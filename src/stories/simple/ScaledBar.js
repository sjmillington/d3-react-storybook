import * as d3 from 'd3';
import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`

  div {
    font: 10px sans-serif;
    background-color: steelblue;
    text-align: right;
    padding: 3px;
    margin: 1px;
    color: white;
  }
  
`

class ScaledBar extends React.Component {

  drawChart(){
    const data = this.props.data;

    const x = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, 400])

    d3.select(this.refs.myDiv)
        .selectAll("div")
        .data(data)
          .enter()
          .append("div")
          .style("width", d => x(d) + "px")
          .text(d => d);
  }

  componentDidMount(){
    this.drawChart();
  }


  render(){
    return <StyledBar ref="myDiv" height={400} width={400} />
  }
}

export default ScaledBar;