import React, { Component } from 'react';
import SelectRiverItem from './SelectRiverItem';
import Moment from 'react-moment';
import axios from 'axios';



class SelectedRivers extends Component {
  constructor (props) {
    super (props);
    console.log(props, 'selected riv IDS');
    this.state = {
      info: {},
      riverIds: null
    };

  }
  componentWillMount () {
    const riverIds = [];
    const rivers = this.props.rivers;
    console.log(rivers, "OH YEAH");
    rivers.map((river) => {
      riverIds.push(river.id);
    });
    const strRiverIds = riverIds.toString();
    this.setState({ riverIds: strRiverIds })
    console.log(strRiverIds, "sel river STRING");
  }
  componentDidMount () {
    axios.get('http://waterservices.usgs.gov/nwis/iv/?format=json&sites=' + this.state.riverIds + '&parameterCd=00060&siteStatus=all')
    .then((response) => {
      console.log('response sel rivers', response)
      this.setState({info: response.data.value.timeSeries[0].values[0].value[0]})
    })
    .catch((error) => {
      console.error('axios error', error)
    })
    setInterval( () => {
      axios.get('http://waterservices.usgs.gov/nwis/iv/?format=json&sites=' + this.state.riverIds + '&parameterCd=00060&siteStatus=all')
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
