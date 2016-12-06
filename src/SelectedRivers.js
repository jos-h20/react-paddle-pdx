import React from 'react';



const
SelectedRivers = ({rivers, removeRiver}) => {
  if (!rivers) {
    return <div>No rivers selected yet.</div>
  }
  console.log({rivers}, 'selected rivers');
  const riverItems = rivers.map((river, i) => {
    return (
      <li key={river.key} className="list-group-item">
        <div className="river-list-media">
          <h5>{river.sourceInfo.siteName}</h5>
          <h5>CFS: {river.values[0].value[0].value}</h5>
          <button onClick={() => removeRiver.call(river, i)}>Remove</button>
        </div>
      </li>
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

export default SelectedRivers;

//
