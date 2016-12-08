import React, { Component } from 'react';


class SelectRiverItem extends Component {
  constructor (props) {
    super (props);
    console.log(props, 'selected riv ITEMS');

  }
  render () {
    return (
      <li key={this.props.name} className="list-group-item">
        <div className="river-list-media">
          <div className="media-body">
            <div className="media-heading">
              <h3>{this.props.river.name}</h3>

              <h4>{this.props.river.desc}</h4>
              <button onClick={() => this.props.removeRiver.call(this.props.river, this.props.i)}>Remove</button>
            </div>
          </div>
        </div>
      </li>
    );
  }
};

export default SelectRiverItem;

              // <h4>CFS: {this.state.info.value} at <Moment format='hh:mm '>{this.state.info.dateTime}</Moment></h4>
