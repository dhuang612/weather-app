import React, { Component } from 'react';
import HourlyWeather from '../components/DisplayHourlyWeather';
import axios from 'axios';
import './DisplayWeather.css';

//confirming that the api key is available also checking if in dev / prod
console.log(process.env.REACT_APP_WEATHER_API_KEY, process.env.NODE_ENV);

const PATH_BASE = 'https://api.openweathermap.org/';
const REQ_PATH = 'data/2.5/forecast?';
const cityID = '5128638';
const units = 'imperial';
const cnt = 20;
const url = `${PATH_BASE}${REQ_PATH}id=${cityID}&APPID=${
  process.env.REACT_APP_WEATHER_API_KEY
}&units=${units}&cnt=${cnt}`;

class DisplayWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHourlyWeather: false,
      hourlyWeather: '',
      currentforecast: '',
      currenttime: '',
      currentweather: '',
      hourlyWeather: []
    };
  }
  async componentDidMount() {
    this.switchToHourly();
    await this.fetchWeatherData();
  }
  fetchWeatherData = async () => {
    try {
      const api_call = await axios.get(url);
      const response = await api_call;
      this.sortData(response.data);
    } catch (err) {
      console.log(err);
    }
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

  /*
javascript string method .startsWith only returns 1 value
array.forEach
-1 returns unique values
  */
  sortData = result => {
    const { list } = result;
    console.log(list);
    const sortedData = list
      .filter(item => item.dt_txt.indexOf(this.curday('-') > -1))
      .map(item => ({
        day: item.dt_txt,
        temp: item.main.temp,
        dt: this.convertTimefromUnix(item.dt),
        weather: item.weather[0].main
      }));
    console.log(sortedData);
    this.setState({
      currentforecast: sortedData[0].temp,
      currenttime: sortedData[0].dt,
      currentweather: sortedData[0].weather,
      hourlyWeather: [...sortedData]
    });
  };
  hourlyWeatherData = sortedData => {
    const { hourlyWeather } = this.state;
    console.log(hourlyWeather);
  };

  switchToHourly = () => {
    this.setState({ showHourlyWeather: !this.state.showHourlyWeather });
  };

  render() {
    const {
      currentforecast,
      currenttime,
      currentweather,
      hourlyWeather
    } = this.state;
    const { showHourlyWeather } = this.state;
    if (this.state.showHourlyWeather) {
      return (
        <div className="weather">
          <h1>Current temperature</h1>
          <div className="day">{this.state.currenttime}</div>
          {this.state.currentforecast}
          <div>{this.state.currentweather}</div>
          <button onClick={this.switchToHourly}>show hourly temperature</button>
        </div>
      );
    } else {
      return <HourlyWeather hourlyWeather={this.state.hourlyWeather} />;
    }
  }
}

export default DisplayWeather;
