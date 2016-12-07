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
        id={river.id}
        river={river} />
    );
  });


  return (
    <div>
      {props.displayRivers ? (
        <div>
          <button onClick={props.hideRivers}>Hide All Rivers</button>
          <h1>All Rivers</h1>
          <ul className="col-md-4 list-group">
            {riverItems}
          </ul>
        </div>
      ) : (
        <div><button onClick={props.showRivers}>Show All Rivers</button></div>
      )}
    </div>
  )
}

export default RiverList;


// <h1>All Rivers</h1>
// <ul className="col-md-4 list-group">
//   {riverItems}
// </ul>
