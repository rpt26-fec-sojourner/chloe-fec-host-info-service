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
  margin-bottom: 24px;
`;

const Description = (props) => {
  return (
    <div>
      <Body>{props.hostDescription}</Body>
      <Title>During your stay</Title>
      <Body>{props.stayDescription}</Body>
    </div>
  );
};

export default Description;