import React from 'react';

const ResponseInfo = (props) => {
  return (
    <div>
      <div>{`Response rate: ${props.rate}%`}</div>
      <div>{`Response time: within ${props.time}`}</div>
    </div>
  );
};

export default ResponseInfo;