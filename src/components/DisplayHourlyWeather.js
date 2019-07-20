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

    //getting info from state and putting information into array.
    const dataSet = Object.entries(this.state.HourlyWeather).map(
      ([key, value]) => {
        {
          const DataSorted = [].concat(value);
          // storedData.push(DataSorted);
          return DataSorted;
        }
      }
    );

    console.log(dataSet);
    const deconstructData = dataSet[0].map((item, index) => {
      const weather = [];
      const temp = [];
      const time = [];
      for (let values of dataSet[0].values()) {
        console.log(values.temp, values.dt, values.weather);
      }
    });
    this.setState({ weatherArr: [deconstructData.weather] });
    console.log(this.state.weatherArr);
    //next steps get data from new object and sort into arrays to save in state.
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
//getting values inside an obj
 for (key in dataSet) {
            if (dataSet.hasOwnProperty(key)) {
              console.log(value[index], value[index]);
            }
          }



*/
