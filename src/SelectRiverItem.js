import React, { Component } from 'react';
import Moment from 'react-moment';
import axios from 'axios';

class SelectRiverItem extends Component {
  constructor (props) {
    super (props);
    console.log(props, 'selected riv ITEM');
    this.state = {
      info: {}
    };
  }
  componentDidMount () {
    axios.get('http://waterservices.usgs.gov/nwis/iv/?format=json&sites=' + this.props.id + '&parameterCd=00060&siteStatus=all')
    .then((response) => {
      console.log('response sel rivers', response)
      this.setState({info: response.data.value.timeSeries[0].values[0].value[0]})
    })
    .catch((error) => {
      console.error('axios error', error)
    })
    setInterval( () => {
      axios.get('http://waterservices.usgs.gov/nwis/iv/?format=json&sites=' + this.props.id + '&parameterCd=00060&siteStatus=all')
      .then((response) => {
        console.log('response sel rivers', response)
        this.setState({info: response.data.value.timeSeries[0].values[0].value[0]})
      })
      .catch((error) => {
        console.error('axios error', error)
      })
    }, 900000);
  }
  render () {
    return (
      <li key={this.props.name} className="list-group-item">
        <div className="river-list-media">
          <div className="media-body">
            <div className="media-heading">
              <h3>{this.props.river.name}</h3>
              <h4>CFS: {this.state.info.value} at <Moment format='hh:mm '>{this.state.info.dateTime}</Moment></h4>
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
// <h4>CFS: {apiRivers.values[0].value[0].value}</h4>

// <button onClick={() => this.props.removeRiver.call(river)}>Remove</button>
