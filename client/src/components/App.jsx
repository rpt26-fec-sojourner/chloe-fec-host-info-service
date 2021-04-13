import React from 'react';
import axios from 'axios';
const url = 'http://localhost:2222';
import Name from './Name.jsx';
import Reviews from './Reviews.jsx';
import ResponseInfo from './ResponseInfo.jsx';
import Description from './Description.jsx';
import ContactHost from './ContactHost.jsx';
import SuperhostDesc from './SuperhostDesc.jsx';

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
      })
      .catch((err) => {
        console.log(`Error getting host Info for listing ID: ${listingID}`);
      });
  }

  render() {
    return (
      <div>
        <Name hostName={this.state.hostName} joinDate={this.state.joinDate}/>
        <Reviews count={this.state.hostReviewCount} superhost={this.state.superhostFlag}/>
        <ResponseInfo rate={this.state.responseRate} time={this.state.responseTime}/>
        <Description hostDescription={this.state.hostDescription} stayDescription={this.state.stayDescription}/>
        <ContactHost />
        <SuperhostDesc hostName={this.state.hostName} superhost={this.state.superhostFlag}/>
      </div>
    );
  }
}

export default App;