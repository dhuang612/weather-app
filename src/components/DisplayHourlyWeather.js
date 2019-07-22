import React, { Component } from 'react';
import { isTemplateElement } from '@babel/types';
//refactor the dataset so that there are less pieces of state
class HourlyWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HourlyWeather: this.props,

      sortedHourlyWeather: {
        temp: '',
        time: '',
        weather: ''
      }
    };
  }
  async componentDidMount() {
    await this.sortHourlyData();
  }
  sortValues = value => {
    let temp = [];
    let weather = [];
    let time = [];

    if (value.temp) {
      temp.push(value.temp);
    }
    if (value.dt) {
      time.push(value.dt);
    }
    if (value.weather) {
      weather.push(value.weather);
    }

    return { temp: temp, time: time, weather: weather };
  };
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
    const deconstructData = Array.from(dataSet[0], this.sortValues);
    console.log(deconstructData);
    for (let i = 0; i < deconstructData.length; i++) {
      this.setState({
        sortedHourlyWeather: {
          temp: [...deconstructData[i].temp],
          time: [...deconstructData[i].time],
          weather: [...deconstructData[i].weather]
        }
      });
    }

    console.log(this.state.sortedHourlyWeather);
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
   for (let i = 0; i < deconstructData.length; i++) {
      for (let x = 0; x < deconstructData[i].length; x++) {
        for (let values of deconstructData) {
          this.setState({
            tempData: [...deconstructData[i][x].temp],
            timeData: deconstructData.time,
            weatherData: deconstructData.weather
          });
        }
      }
    }







*/
