import React, { Component } from 'react';

import axios from 'axios';
//confirming that the api key is available.
console.log(process.env.REACT_APP_WEATHER_API_KEY);

const PATH_BASE = 'https://api.openweathermap.org/';
const REQ_PATH = 'data/2.5/forecast?';
const cityID = '5128638';
const units = 'imperial';

class WeatherData extends Component {
  componentDidMount() {
    this.fetchWeatherData();
    this.convertTimefromUnix();
  }
  constructor(props) {
    super(props);
    this.state = {
      forecast: '',
      time: []
    };
  }

  convertTimefromUnix = dt => {
    const date = new Date(dt * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    const formattedTime =
      hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  };
  /*
1562760000 = 08:00:00am
1562781600 = 2:00:00pm
1562792400 = 5:00:00pm
1562814000 = 11:00:00pm
*/
  sortData = result => {
    const { list } = result;
    const tempRecording = list.filter(
      ({ dt }) =>
        dt === '1562760000' ||
        dt === '1562781600' ||
        dt === '1562792400' ||
        dt === '1562814000'
    );
    console.log(tempRecording);
    list.filter(({ dt }) =>
      this.setState({ time: this.convertTimefromUnix(dt) })
    );

    list.map(item =>
      this.setState({
        forecast: item.main
      })
    );
    console.log(this.state.forecast, this.state.time);
  };

  fetchWeatherData = () => {
    axios(
      `${PATH_BASE}${REQ_PATH}id=${cityID}&APPID=${
        process.env.REACT_APP_WEATHER_API_KEY
      }&units=${units}`
    )
      .then(result => this.sortData(result.data))
      .catch(err => console.log(err));
  };

  render() {
    return <div>Hi there</div>;
  }
}
export default WeatherData;

/*


*/
