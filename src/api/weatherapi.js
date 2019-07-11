import React, { Component } from 'react';

import axios from 'axios';
//confirming that the api key is available also checking if in dev / prod
console.log(process.env.REACT_APP_WEATHER_API_KEY, process.env.NODE_ENV);

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
      forecast: [],
      time: []
    };
  }

  fetchWeatherData = () => {
    axios(
      `${PATH_BASE}${REQ_PATH}id=${cityID}&APPID=${
        process.env.REACT_APP_WEATHER_API_KEY
      }&units=${units}`
    )
      .then(result => this.sortData(result.data))
      .catch(err => console.log(err));
  };

  convertTimefromUnix = dt => {
    const date = new Date(dt * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    const formattedTime =
      hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  };

  curday = sp => {
    const today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return yyyy + sp + mm + sp + dd;
  };

  sortData = result => {
    const { list } = result;
    console.log(list);
    const sortedData = list
      .filter(item => (item.dt_txt = item.dt_txt.startsWith(this.curday('-'))))
      .map(item => item.main.temp);
    this.setState({ forecast: sortedData });
    console.log(sortedData);
  };

  render() {
    return (
      <div>
        {this.state.forecast}
        <div>{this.state.time}</div>
      </div>
    );
  }
}
export default WeatherData;

/*


*/
