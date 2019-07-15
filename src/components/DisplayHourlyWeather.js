import React, { Component } from 'react';

class HourlyWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HourlyWeather: [this.props]
    };
  }
  componentDidMount() {}

  render() {
    const { hourlyWeather } = this.state;
    console.log(this.state.HourlyWeather);
    console.log(hourlyWeather);
    return <div>hourly temperatures</div>;
  }
}
export default HourlyWeather;
