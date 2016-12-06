import React, { Component } from 'react';
import SelectRiverItem from './SelectRiverItem';
import axios from 'axios';

class SelectedRivers extends Component {
  constructor (props) {
    super (props);
  }


 render () {

  const riverItems = this.props.rivers.map((river, i) => {
    return (
      <SelectRiverItem
        removeRiver={this.props.removeRiver}
        key={river.name}
        id={river.sourceInfo.siteCode[0].value}
        i={i}
        river={river} />
    );
  });
    return (
      <div>
      <h1>Selected Rivers</h1>
      <ul className="col-md-4 list-group">
        {riverItems}
      </ul>
      </div>
    )
  }
}

export default SelectedRivers;
