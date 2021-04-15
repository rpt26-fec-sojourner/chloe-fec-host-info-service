import React from 'react';
import styled from 'styled-components';
import SecurityBadge from '../assets/AirBnB_SecurityBadge.png';

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: auto;
  touch-action: manipulation;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  padding: 13px 23px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  border-color: rgb(34, 34, 34);
  background: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
  display: block;
  -webkit-box-pack: initial;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  justify-content: initial;
  max-width: 300px;
`;

const Body = styled.div`
  -webkit-box-align: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  color: #222222;
`;

const SecurityText = styled.div`
  padding-left: 10px;
`;

const ContactHost = (props) => {
  return (
    <div>
      <Button>Contact host</Button>
      <Body>
        <Icon src={SecurityBadge} alt="Security Badge"></Icon>
        <SecurityText>
          To protect your payment, never transfer<br></br>money or communicate outside of the Airbnb<br></br>website or app.
        </SecurityText>
      </Body>
    </div>
  );
};

export default ContactHost;