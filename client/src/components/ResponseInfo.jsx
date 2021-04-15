import React from 'react';
import styled from 'styled-components';

const Body = styled.li`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
  list-style: none;
  margin-top: 0px;
  margin-bottom: 8px;
  margin-left: 0px;
  padding-left: 0px;
  padding-right: 0px;
`;

const Container = styled.ul`
  padding-left: 0px;
`;

const ResponseInfo = (props) => {
  return (
    <Container>
      <Body>{`Response rate: ${props.rate}%`}</Body>
      <Body>{`Response time: within ${props.time}`}</Body>
    </Container>
  );
};

export default ResponseInfo;