import React from 'react';


const RiverDetail = ({river, addRiver}) => {
  if (!river) {
    return <div></div>
  }


  return(
    <div key={river.id} className="river-detail col-md-8">
      <div className="details">
        <h2>River Detail</h2>
        <div>{river.name}</div>
        <div>{river.desc}</div>
        <button onClick={() => addRiver(river)}>Add</button>
      </div>
    </div>
  );
};

export default RiverDetail;
