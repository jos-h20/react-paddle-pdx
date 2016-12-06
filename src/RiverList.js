import React from 'react';
import RiverListItem from './RiverListItem';


const
RiverList = (props) => {
  console.log(props, 'river list');
  const riverItems = props.rivers.map((river) => {
    return (
      <RiverListItem
        onRiverSelect={props.onRiverSelect}
        addRiver={props.addRiver}
        key={river.name}
        river={river} />
    );
  });
  return (
    <div>
    <h1>All Rivers</h1>
    <ul className="col-md-4 list-group">
      {riverItems}
    </ul>
    </div>
  )
}

export default RiverList;
