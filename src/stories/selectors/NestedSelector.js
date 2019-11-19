import * as d3 from 'd3';
import React from 'react';

class NestedSelector extends React.Component {

  state = {
    matrix: [
      [0,   1,  2,  3],
      [4,   5,  6,  7],
      [8,   9, 10, 11],
      [12, 13, 14, 15]
    ]
  }

  componentDidMount(){

    const tab = d3.select(this.refs.table);

    var tr = tab.selectAll('tr')
      .data(this.state.matrix)
      .enter().append('tr')

    tr.selectAll('td')
      .data(d => d)
      .enter().append('td')
        .text(d => d)

  }


  render(){
    return <table ref="table" height={200} width={200}></table>
  }
}

export default NestedSelector;