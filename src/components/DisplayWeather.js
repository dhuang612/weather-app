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
    console.log(this.state.showHourlyWeather);
    if (this.state.showHourlyWeather) {
      return (
        <div className="weather">
          <h1>Current temperature</h1>
          <button onClick={this.switchToHourly}>
            Click me to switch to hourly
          </button>

          <WeatherData />
        </div>
      );
    } else {
      return <HourlyWeather />;
    }
  }
}

export default DisplayWeather;
