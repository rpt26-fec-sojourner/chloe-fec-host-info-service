import React from 'react';

const SuperhostDesc = (props) => {
  let superhostDescription = props.superhost ?
    <span>
      <div>{`${props.hostName} is a Superhost`}</div>
      <div>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
    </span>
    : <span></span>;

  return (
    <div>
      {superhostDescription}
    </div>
  );
};

export default SuperhostDesc;