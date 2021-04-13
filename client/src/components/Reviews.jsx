import React from 'react';
import superhostBadge from '../assets/AirBnB_Superhost_Icon.png';

const Reviews = (props) => {
  let superhostIndicator = props.superhost ?
    <span>
      <img src={superhostBadge} alt="Superhost Badge"/>
      <span> Superhost</span>
    </span>
    : <span></span>;
  return (
    <div>
      <span>{`${props.count} Reviews`}</span>
      {superhostIndicator}
    </div>
  );
};

export default Reviews;