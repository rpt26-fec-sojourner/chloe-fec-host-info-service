import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 600;
  size: 22px;
  line-height: 26px;
  color: #222222;
  -webkit-box-pack: initial;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  justify-content: initial;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Body = styled.div`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  size: 14px;
  line-height: 18px;
  color: #717171;
  padding-top: 8px;
`;

const Container = styled.div`
  -webkit-box-pack: initial;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  justify-content: initial;
  margin-bottom: 24px;
  padding-left: 8px;
`;

const Name = (props) => {
  return (
    <Container>
      <Title>{`Hosted by ${props.hostName}`}</Title>
      <Body>{`Joined in ${props.joinDate}`}</Body>
    </Container>
  );
};

export default Name;