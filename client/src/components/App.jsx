import React from 'react';
import axios from 'axios';
const url = 'http://localhost:2222';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingID: 1,
      hostName: '',
      joinDate: '',
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
        console.log('res: ', res);
      })
      .catch((err) => {
        console.log(`Error getting host Info for listing ID: ${listingID}`)
      });
  }

  render() {
    return (
      <div>
        <div>Hello World!</div>
      </div>
    );
  }
}

export default App;