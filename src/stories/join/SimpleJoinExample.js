import * as d3 from 'd3';
import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`

`

const width = 300;

class SimpleJoinExample extends React.Component{

  randomLetters(){
    return d3.shuffle("abcdefghijklmnopqrstuvwzyz".split(""))
      .slice(0, Math.floor(6 + Math.random() * 20))
      .sort();
  }
  

  tick(){

    const svg =  d3.select(this.refs.myDiv);

    const t = svg.transition().duration(750)
  
    svg.selectAll('text')
      .data(this.randomLetters(), d => d)
      .join(
        enter => enter.append("text")
            .attr("fill", "green")
            .attr("x", (d, i) => i * 16)
            .attr("y", -30)
            .text(d => d)
          .call(enter => enter.transition(t)
            .attr("y", 0)),
        update => update
            .attr("fill", "black")
            .attr("y", 0)
          .call(update => update.transition(t)
            .attr("x", (d, i) => i * 16)),
        exit => exit
            .attr("fill", "brown")
          .call(exit => exit.transition(t)
            .attr("y", 30)
            .remove()))
   
  }

  componentDidMount(){

    d3.select(this.refs.myDiv)
    .attr('width', width)
    .attr('height', 33)
    .attr('viewBox', `0 -20 ${width} 33`);

    this.interval = setInterval(() => this.tick(), 1000);
  
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }


  render(){
    return (
      <StyledSVG ref="myDiv">

      </StyledSVG>
    )
  }
} 

export default SimpleJoinExample;