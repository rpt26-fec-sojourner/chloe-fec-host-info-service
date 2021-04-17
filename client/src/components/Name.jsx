import React from 'react';
import styled from 'styled-components';

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 75px;
  width: 75px;
  float: left;
`;

const HostName = styled.h2`
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
  padding-top: 5px;
  padding-left: 90px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const JoinDate = styled.div`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  size: 12px;
  line-height: 18px;
  color: #717171;
  padding-top: 0px;
  padding-left: 90px;
  padding-bottom: 20px;
`;

const Text = styled.div`
  display: inline;
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
      <ProfilePic src="https://airbnbhostpictures.s3.amazonaws.com/pic-1.jpg"></ProfilePic>
      <Text>
        <HostName>{`Hosted by ${props.hostName}`}</HostName><br></br>
        <JoinDate>{`Joined in ${props.joinDate}`}</JoinDate>
      </Text>
    </Container>
  );
};

export default Name;