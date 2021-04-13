import React from 'react';

const Description = (props) => {
  return (
    <div>
      <div>{props.hostDescription}</div>
      <div>During your stay</div>
      <div>{props.stayDescription}</div>
    </div>
  );
};

export default Description;