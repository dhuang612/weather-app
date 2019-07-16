import React, { Component } from 'react';
//refactor the dataset so that there are less pieces of state
class HourlyWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HourlyWeather: [this.props],
      tempArr: [],
      timeArr: [],
      weatherArr: []
    };
  }
  componentDidMount() {
    this.sortHourlyData();
  }
  sortHourlyData = () => {
    //an array with 20 objects inside
    const dataSet = [].concat(this.state.HourlyWeather);
    const sortInfo = dataSet;
    console.log(sortInfo);
    sortInfo.map((item, key) => ({ key: item.day, temp: item.temp }));
    console.log(sortInfo);
    this.setState({
      tempArr: sortInfo.temp
    });
    console.log(sortInfo);
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
