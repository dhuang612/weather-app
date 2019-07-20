import React, { Component } from 'react';
import { isTemplateElement } from '@babel/types';
//refactor the dataset so that there are less pieces of state
class HourlyWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HourlyWeather: this.props,

      tempArr: [],
      timeArr: [],
      weatherArr: []
    };
  }
  async componentDidMount() {
    await this.sortHourlyData();
  }
  sortHourlyData = () => {
    let storedData = [];
    const weather = [];
    const temp = [];
    const time = [];

    const dataSet = Object.entries(this.state.HourlyWeather).map(
      ([key, value]) => {
        {
          let DataSorted = [].concat(value);
          return DataSorted;
          // storedData.push(DataSorted);
        }
      }
    );
    console.log(dataSet);
    const deconstructData = dataSet[0].map((item, index) => ({
      temp: item.temp,
      time: item.dt,
      weather: item.weather
    }));
    for (let i = 0; i < deconstructData.length; i++) {
      if (deconstructData.temp) {
        weather.push(deconstructData.temp);
        console.log(weather);
      }
    }
    console.log(deconstructData);

    this.setState({
      tempArr: deconstructData.temp,
      timeArr: deconstructData.time,
      weatherArr: deconstructData.weather
    });
    console.log(this.state.tempArr, this.state.timeArr, this.state.weatherArr);
  };

  render() {
    return (
      <div>
        <h1>Hourly weather</h1>
      </div>
    );
  }
}
export default HourlyWeather;

/*
current working code
////////////
 const deconstructData = dataSet.map(item => {
      for (let i = 0; i < dataSet[0].length; i++) {
        console.log(item[i].temp);
      }
    });
///////////////




*/
