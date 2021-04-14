import React from 'react';
import superhostBadge from '../assets/AirBnB_Superhost_Icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledStar = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ff385c;
`;

const Body = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal,
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
`;

const Container = styled.div`
  margin-bottom: 24px;
`;

const Reviews = (props) => {
  let superhostIndicator = props.superhost ?
    <span>
      <img src={superhostBadge} alt="Superhost Badge"/>
      <span>&nbsp;&nbsp;Superhost</span>
    </span>
    : <span></span>;
  return (
    <Container>
      <StyledStar>
        <FontAwesomeIcon icon={faStar}/>
      </StyledStar>
      <Body>
        <span>&nbsp;&nbsp;{`${props.count} Reviews`}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {superhostIndicator}
      </Body>
    </Container>
  );
};

export default Reviews;