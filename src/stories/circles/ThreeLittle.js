import * as d3 from 'd3';
import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`

  
`

class ThreeLittle extends React.Component{

  constructor(props){
    super(props);
    this.state = { data: [32, 57, 112]}
  }


  componentDidMount(){

    let svg = d3.select(this.refs.circles);

    //bind and style the initial 3 circles. 
    
    svg.selectAll('circle')
      .data(this.state.data)
      .style('fill', 'steelblue')
      .attr('r', d => Math.sqrt(d))
      .attr('cx', (d,i) => i * 100 + 30)

  }

  handleAppendingCircles = () => {

    //pushes more data through the enter method.

    let data = this.state.data;
    data.push(80 * Math.random())
    this.setState({...this.state, data })

    let svg = d3.select(this.refs.circles);
    let circles = svg.selectAll('circle')
      .data(this.state.data);

    circles.enter().append('circle')
      .attr('fill', 'red')
      .merge(circles)
      .attr('r', d => Math.sqrt(d))
      .attr('cy', 60)
      .attr('cx', (d, i) => i * 100 + 30)

  }

  handleRemovingCircles = () => {

    //removes data through the exit method.

    let data = this.state.data;
    data.pop();
    this.setState({...this.state, data })

    let svg = d3.select(this.refs.circles);
    let circle = svg.selectAll('circle')
    .data(this.state.data);
  
    circle.exit().remove();

  }


  render(){
    return (
      <div>
      <StyledSVG ref="circles" width={720} height={120}>
        <circle cx="40" cy="60" r="10"></circle>
        <circle cx="80" cy="60" r="10"></circle>
        <circle cx="120" cy="60" r="10"></circle>
     </StyledSVG>
     <button onClick={this.handleAppendingCircles}>Add Circles</button>
     <button onClick={this.handleRemovingCircles}>Remove Circles</button>
     </div>
     )
  }
}

export default ThreeLittle;