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
    const dataSet = Object.entries(this.state.HourlyWeather)
      .map(([key, value]) => {
        {
          let DataSorted = [].concat(value);

          storedData.push(DataSorted);
        }
        return storedData;
      })
      .map((item, index) => {
        console.log(item[index]);
      });
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
.filter(item => item.dt_txt.indexOf(this.curday('-') > -1))
 .forEach((item, x) =>
        console.log(item[x].day, item[x].temp, item[x].weather)
      );
.map(item => ({ temp: item.temp, time: item.dt, weather: item.weather }));
      For next steps, I want to take the object map over them and return the results to an array
///currently showing one date and temp
 const dataSet = [].concat(


const sortHourlyData = dataSet
      .filter((item, i) => item[i])
      .forEach((item, x) =>
        console.log(item[x].day, item[x].temp, item[x].weather)
      );





*/
