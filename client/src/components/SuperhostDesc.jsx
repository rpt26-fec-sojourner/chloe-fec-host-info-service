import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
  margin-bottom: 8px;
`;

const Body = styled.div`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal,
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`;

const SuperhostDesc = (props) => {
  let superhostDescription = props.superhost ?
    <span>
      <Title>{`${props.hostName} is a Superhost`}</Title>
      <Body>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</Body>
    </span>
    : <span></span>;

  return (
    <div>
      {superhostDescription}
    </div>
  );
};

export default SuperhostDesc;