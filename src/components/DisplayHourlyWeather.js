import React, { Component } from 'react';
import { isTemplateElement } from '@babel/types';
//refactor the dataset so that there are less pieces of state
class HourlyWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HourlyWeather: this.props,

      tempData: [],
      timeData: [],
      weatherData: []
    };
  }
  async componentDidMount() {
    await this.sortHourlyData();
  }
  onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  sortHourlyData = data => {
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
      //this is taking the values inside the object and pushing them to different arrays
      for (let values of dataSet[0].values()) {
        console.log(values);
        temp.push(values.temp);
        weather.push(values.weather);
        time.push(values.dt);
      }

      return { tempArr: temp, weatherArr: weather, timeArr: time };
    });

    console.log(deconstructData);

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
for (let values of dataSet[0].values()) {
        temp.push(values.temp);
        weather.push(values.weather);
        time.push(values.dt);
        this.setState({
          tempData: dataSet.temp
        });
      }

*/
