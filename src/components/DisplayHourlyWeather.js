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
    const deconstructData = dataSet.map(item => {
      for (let i = 0; i < dataSet[0].length; i++) {
        console.log(item[i].temp);
      }
    });

    console.log(deconstructData);
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
.map(({ dt, weather, temp }) => ({ dt, weather, temp }));
 .map({ time: dt, currweather: weather, currtemp: temp });
.filter(item => item.dt_txt.indexOf(this.curday('-') > -1))
 .forEach((item, x) =>
        console.log(item[x].day, item[x].temp, item[x].weather)
      );
    .map((item, index) => console.log(item));   
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
