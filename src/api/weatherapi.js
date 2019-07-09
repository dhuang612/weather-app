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
  }
  constructor(props) {
    super(props);
    this.state = {
      forecast: ''
    };
  }

  sortData = result => {
    const { list } = result;
    list.map(list => this.setState({ forecast: list }));
    console.log(this.state.forecast);
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
