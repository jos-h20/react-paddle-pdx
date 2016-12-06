import React from 'react';

const RiverListItem = ({river, id, onRiverSelect, addRiver, getIds}) => {
  // const river = props.river; this is the same as putting river as argument
  return (
    <li key={river.name} onClick={() => onRiverSelect(river)} className="list-group-item">
      <div className="river-list-media">
        <div className="media-body">
          <div className="media-heading">
            <h3>{river.sourceInfo.siteName}</h3>
            <h4>CFS: {river.values[0].value[0].value}</h4>
            <button onClick={() => addRiver(river)}>Add</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RiverListItem;
// <h4>CFS: {apiRivers.values[0].value[0].value}</h4>
// onClick={() => getIds()}
