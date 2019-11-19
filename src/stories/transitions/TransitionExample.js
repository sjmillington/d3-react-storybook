import * as d3 from 'd3';
import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg`

  width: 200px;
  height: 200px;
  

`

class TransitionExample extends React.Component{

  state = {
    data: [10]
  }


  componentDidMount(){

    const svg = d3.select(this.refs.svg);

    let rect = svg.selectAll('rect')
      .data(this.state.data)
      .enter().append('rect')
        .attr('fill', 'green')
        .attr('height', 100)
        .attr('width', 100)

    // svg.selectAll('rect')
    //   .attr('fill', 'blue')

  }

  handleInstantColourChange = () => { console.log('click 1'); d3.select(this.refs.svg).selectAll('rect').attr('fill', 'red'); }

  handleTransitionColourChange = () => {console.log('click'); d3.select(this.refs.svg).selectAll('rect').transition().style('fill', 'blue'); }

  handleTransitionColourChangeWithDelay = () => {console.log('click'); d3.select(this.refs.svg).selectAll('rect').transition().delay(500).style('fill', 'purple'); }


  render(){
    return (<div>
      <StyledSVG ref="svg" />
        <button onClick={this.handleInstantColourChange}>Change colour instantly</button>
        <button onClick={this.handleTransitionColourChange}>Change colour with transition</button>
        <button onClick={this.handleTransitionColourChangeWithDelay}>Change colour with transition w Delay</button>
      </div>
    )
  }

}

export default TransitionExample;

