import React from 'react';
import styled from 'styled-components';

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

const Body = styled.div`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #222222;
  margin-top: 24px;
`;

const ContactHost = (props) => {
  return (
    <div>
      <Button>Contact host</Button>
      <Body>
        <span>badgeicon   </span>
        <span>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</span>
      </Body>
    </div>
  );
};

export default ContactHost;