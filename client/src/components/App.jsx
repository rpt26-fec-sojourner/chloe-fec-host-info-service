import React from 'react';
import axios from 'axios';
const url = 'http://localhost:2222';
import Name from './Name.jsx';
import Reviews from './Reviews.jsx';
import ResponseInfo from './ResponseInfo.jsx';
import Description from './Description.jsx';
import ContactHost from './ContactHost.jsx';
import SuperhostDesc from './SuperhostDesc.jsx';
import styled from 'styled-components';

const LeftMargin = styled.div`
  width: 41.6667%;
  padding-left: 8px;
  padding-right: 8px;
  float: left;
`;

const RightMargin = styled.div`
  width: 41.6667%;
  margin-left: 8.33333%;
  padding-left: 8px;
  padding-right: 8px;
  float: left;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingID: 1,
      hostName: '',
      joinDate: '',
      hostReviewCount: '',
      superhostFlag: false,
      hostDescription: '',
      stayDescription: '',
      responseRate: '',
      responseTime: ''
    };

    this.getHostInfo = this.getHostInfo.bind(this);
  }

  componentDidMount() {
    let id = window.location.href.split('/').pop() || 1;

    this.getHostInfo(id);
  }

  getHostInfo(listingID) {
    axios.get(`${url}/host/${listingID}`)
      .then((res) => {
        this.setState({
          listingID: listingID,
          hostName: res.data.hostName,
          joinDate: res.data.joinDate,
          hostReviewCount: res.data.hostReviewCount,
          superhostFlag: res.data.superhostFlag,
          hostDescription: res.data.hostDescription,
          stayDescription: res.data.stayDescription,
          responseRate: res.data.responseRate,
          responseTime: res.data.responseTime
        });

        console.log('state: ', this.state);
      })
      .catch((err) => {
        console.log(`Error getting host Info for listing ID: ${listingID}`);
      });
  }

  render() {
    return (
      <div>
        <Name hostName={this.state.hostName} joinDate={this.state.joinDate}/>
        <LeftMargin>
          <Reviews count={this.state.hostReviewCount} superhost={this.state.superhostFlag}/>
          <Description hostDescription={this.state.hostDescription} stayDescription={this.state.stayDescription}/>
          <SuperhostDesc hostName={this.state.hostName} superhost={this.state.superhostFlag}/>
        </LeftMargin>
        <RightMargin>
          <ResponseInfo rate={this.state.responseRate} time={this.state.responseTime}/>
          <ContactHost />
        </RightMargin>
      </div>
    );
  }
}

export default App;