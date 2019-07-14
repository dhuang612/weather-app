import React, { Component } from 'react';

import axios from 'axios';
//confirming that the api key is available also checking if in dev / prod
console.log(process.env.REACT_APP_WEATHER_API_KEY, process.env.NODE_ENV);

const PATH_BASE = 'https://api.openweathermap.org/';
const REQ_PATH = 'data/2.5/forecast?';
const cityID = '5128638';
const units = 'imperial';
const cnt = 20;

class WeatherData extends Component {
  componentDidMount() {
    this.fetchWeatherData();
    this.convertTimefromUnix();
  }
  constructor(props) {
    super(props);
    this.state = {
      forecast: [],
      time: [],
      weather: ''
    };
  }

  fetchWeatherData = () => {
    axios
      .get(
        `${PATH_BASE}${REQ_PATH}id=${cityID}&APPID=${
          process.env.REACT_APP_WEATHER_API_KEY
        }&units=${units}&cnt=${cnt}`
      )
      .then(result => this.sortData(result.data))
      .catch(err => console.log(err));
  };

  convertTimefromUnix = dt => {
    const date = new Date(dt * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const formattedTime = hours + ':' + minutes.substr(-2);
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
      .filter(item => item.dt_txt.startsWith(this.curday('-')))
      .map(item => ({
        temp: item.main.temp,
        dt: item.dt,
        weather: item.weather[0].main
      }));
    console.log(sortedData);
    this.setState({
      forecast: sortedData[0].temp,
      time: this.convertTimefromUnix(sortedData[0].dt),
      weather: sortedData[0].weather
    });
  };

  render() {
    return (
      <div className="ui container">
        <div className="day">{this.state.time}</div>
        {this.state.forecast}
        <div>{this.state.weather}</div>
      </div>
    );
  }
}
export default WeatherData;

/*


*/
