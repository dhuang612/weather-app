import React, { Component } from 'react';

class HourlyWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HourlyWeather: this.props
    };
  }
  componentDidMount() {
    this.sortHourlyData();
  }
  sortHourlyData = () => {
    const dataSet = [].concat(this.state);
    console.log(dataSet);
  };

  render() {
    return <div>Show hourly weather</div>;
  }
}
export default HourlyWeather;

/*
.map(item => ({
        day: item.dt_txt,
        temp: item.main.temp,
        dt: this.convertTimefromUnix(item.dt),
        weather: item.weather[0].main
      }));


      {dataSet.map(item => ({ temp: item.temp }))}


      {dataSet.map(function(item) {
          return item.temp;
        })}
*/
