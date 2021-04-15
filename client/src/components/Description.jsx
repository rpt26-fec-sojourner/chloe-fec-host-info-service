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

const ReadMore = styled.span`
  font-size: inherit;
  font-family: inherit;
  font-style: inherit;
  font-variant: inherit;
  line-height: inherit;
  appearance: none;
  background: transparent;
  border: 0px;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  user-select: auto;
  color: #000000;
  text-decoration: underline;
  border-radius: 4px;
  font-weight: 600;
  outline: none;
`;

const Description = (props) => {
  let hostDesc;

  if (props.hostDescription.indexOf('...') === -1) {
    hostDesc =
    <Body>
      {props.hostDescription}
    </Body>;
  } else {
    hostDesc =
      <Body>
        {props.hostDescription}
        <ReadMore>
        read more
        </ReadMore>
      </Body>;
  }

  return (
    <div>
      {hostDesc}
      <Title>During your stay</Title>
      <Body>{props.stayDescription}</Body>
    </div>
  );
};

export default Description;