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

class NonScaledBar extends React.Component {


  drawChart(){
    const data = this.props.data;

    console.log(data)

    d3.select(this.refs.myDiv)
    .selectAll("div")
    .data(data)
      .enter()
      .append("div")
      .style("width", d => d + "px")
      .text(d => d);
  }

  componentDidMount(){
    this.drawChart();
  }


  render(){
    return <StyledBar ref="myDiv" height={400} width={400} />
  }
}

export default NonScaledBar;