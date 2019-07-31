import React, { Component } from 'react';
import HourlyWeather from '../components/DisplayHourlyWeather';
import axios from 'axios';
import './DisplayWeather.css';

//confirming that the api key is available also checking if in dev / prod
console.log(process.env.REACT_APP_WEATHER_API_KEY, process.env.NODE_ENV);

class DisplayWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHourlyWeather: false,
      currentforecast: '',
      currenttime: '',
      currentweather: '',
      hourlyWeather: [],
      weatherIcon: '',
      cityname: ''
    };
  }
  async componentDidMount() {
    this.switchToHourly();
    await this.fetchWeatherData();
  }
  componentDidUpdate() {
    // this.fetchWeatherData();
  }

  fetchWeatherData = async () => {
    const PATH_BASE = 'https://api.openweathermap.org/';
    const REQ_PATH = 'data/2.5/forecast?';
    let cityname = '';
    const country = 'US';
    const units = 'imperial';
    const cnt = 10;
    const url = `${PATH_BASE}${REQ_PATH}q=${cityname},${country}&APPID=${
      process.env.REACT_APP_WEATHER_API_KEY
    }&units=${units}&cnt=${cnt}`;

    try {
      const response = await axios.get(url);
      this.sortData(response.data);
    } catch (err) {
      console.log(err);
    }

    try {
      const searchedcity = this.state.cityname;
      let cityname = searchedcity;
      console.log(cityname);
      const response = await axios.get(url);
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
        weather: item.weather[0].main,
        weatherIcon: item.weather[0].icon
      }));

    console.log(sortedData);
    this.setState({
      currentforecast: sortedData[0].temp,
      currenttime: sortedData[0].dt,
      currentweather: sortedData[0].weather,
      hourlyWeather: [...sortedData],
      weatherIcon: sortedData[0].weatherIcon
    });
  };
  hourlyWeatherData = () => {
    const { hourlyWeather } = this.state;
    console.log(hourlyWeather);
  };
  handleChange = e => {
    this.setState({ cityname: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
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
    if (this.state.cityname) {
      return (
        <div className="ui container">
          <br />
          <h1>Current temperature</h1>
          <table class="ui basic table">
            <thead>
              <tr>
                <th> time</th>
                <th> temp</th>
                <th> weather</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="day">{this.state.currenttime}</div>
                </td>
                <td>{this.state.currentforecast}</td>
                <div>
                  <td>
                    <img
                      src={
                        'https://openweathermap.org/img/wn/' +
                        this.state.weatherIcon +
                        '.png'
                      }
                    />
                    {this.state.currentweather}
                  </td>
                </div>
              </tr>
            </tbody>
          </table>
          <button onClick={this.switchToHourly}>
            switch to hourly weather
          </button>
        </div>
      );
    } else if (this.state.cityname === '') {
      return (
        <form onSubmit={this.onSubmit}>
          Please enter US city name for weather information <br />
          <label htmlFor="cityname">City name</label>
          <input
            type="text"
            name="name"
            value={this.state.cityname}
            onChange={this.handleChange}
            onSubmit={() => this.onSubmit}
          />
        </form>
      );
    } else {
      return <HourlyWeather hourlyWeather={this.state.hourlyWeather} />;
    }
  }
}

export default DisplayWeather;
