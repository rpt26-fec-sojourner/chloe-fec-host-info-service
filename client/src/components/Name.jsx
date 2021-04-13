import React from 'react';

const Name = (props) => {
  return (
    <div>
      <div>{`Hosted by ${props.hostName}`}</div>
      <div>{`Joined in ${props.joinDate}`}</div>
    </div>
  );
};

export default Name;