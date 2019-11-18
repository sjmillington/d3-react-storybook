import * as d3 from 'd3';
import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`

  
`

class ThreeLittle extends React.Component{

  componentDidMount(){

    let svg = d3.select(this.refs.circles);

    //bind
    let circles = svg.selectAll('circle')
      .data([32, 57, 112, 293, 20, 30])
      .style('fill', 'steelblue')
      .attr('r', d => Math.sqrt(d))
      .attr('cx', (d,i) => i * 100 + 30)

    //circle.attr('cx', () => Math.random() * 720)

    //enter
    circles.enter().append('circle')
      .attr('fill', 'red')
      .merge(circles)
      .attr('r', d => Math.sqrt(d))
      .attr('cy', 60)
      .attr('cx', (d, i) => i * 100 + 30)

      //exit - deletes elements for which there is no data

      let circle = svg.selectAll('circle')
        .data([32, 57])
      
     circle.exit().remove();


  }


  render(){
    return (<StyledSVG ref="circles" width={720} height={120}>
        <circle cx="40" cy="60" r="10"></circle>
        <circle cx="80" cy="60" r="10"></circle>
        <circle cx="120" cy="60" r="10"></circle>
     </StyledSVG>)
  }
}

export default ThreeLittle;