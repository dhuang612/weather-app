import React, { Component } from 'react';
import HourlyWeather from '../components/DisplayHourlyWeather';
import './DisplayWeather.css';
import WeatherData from '../api/weatherapi';

class DisplayWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHourlyWeather: false
    };
  }
  componentDidMount() {
    this.switchToHourly();
  }

  switchToHourly = () => {
    this.setState({ showHourlyWeather: !this.state.showHourlyWeather });
  };
  render() {
    const { showHourlyWeather } = this.state;
    if (this.state.showHourlyWeather) {
      return (
        <div className="weather">
          <h1>Current temperature</h1>

          <WeatherData />
          <button onClick={this.switchToHourly}>show hourly temperature</button>
        </div>
      );
    } else {
      return <HourlyWeather />;
    }
  }
}

export default DisplayWeather;
