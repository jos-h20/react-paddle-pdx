import React, { Component } from 'react';
import SelectRiverItem from './SelectRiverItem';



class SelectedRivers extends Component {
  constructor (props) {
    super (props);
    console.log(props, "selected riv ROUTER");
  }

 render () {
  const riverItems = this.props.rivers.map((river, i) => {
    return (
      <SelectRiverItem
        removeRiver={this.props.removeRiver}
        key={river.name}
        id={river.id}
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
