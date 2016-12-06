import React from 'react';
import Moment from 'react-moment';

const RiverDetail = ({river, addRiver}) => {
  if (!river) {
    return <div>No rivers selected yet.</div>
  }
  // let dateToFormat='{river.values[0].value[0].dateTime}';
  // const url = 'https://www.youtube.com/embed/' + riverId; same as ->

  return(
    <div key={river.id} className="river-detail col-md-8">
      <div className="details">
        <h2>River Detail</h2>
        <div>{river.sourceInfo.siteName}</div>
        <div>CFS: {river.values[0].value[0].value}</div>
        <div>Lat/Long: {river.sourceInfo.geoLocation.geogLocation.latitude}, {river.sourceInfo.geoLocation.geogLocation.longitude}</div>
        <div>Time: <Moment format='MM-DD-YYYY hh:mm'>{river.values[0].value[0].dateTime}</Moment></div>

        <button onClick={() => addRiver(river)}>Add</button>
      </div>
    </div>
  );
};

export default RiverDetail;

// <div>CFS: {apiRivers.values[0].value[0].value}</div>
// <div>Lat/Long: {apiRivers.sourceInfo.geoLocation.geogLocation.latitude}, {apiRivers.sourceInfo.geoLocation.geogLocation.longitude}</div>
// <div>Time: <Moment format='MM-DD-YYYY hh:mm'>{apiRivers.values[0].value[0].dateTime}</Moment></div>
