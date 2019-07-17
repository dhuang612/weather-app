import React, { Component } from 'react';
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
    const dataSet = Object.entries(this.state.HourlyWeather).forEach(
      ([key, value]) => {
        console.log(key, value);
      }
    );
    console.log(dataSet);
  };

  render() {
    return <div>Show hourly weather</div>;
  }
}
export default HourlyWeather;

/*
.filter(item => item.dt_txt.indexOf(this.curday('-') > -1))
 .forEach((item, x) =>
        console.log(item[x].day, item[x].temp, item[x].weather)
      );

      For next steps, I want to take the object map over them and return the results to an array
///currently showing one date and temp
 const dataSet = [].concat(


const sortHourlyData = dataSet
      .filter((item, i) => item[i])
      .forEach((item, x) =>
        console.log(item[x].day, item[x].temp, item[x].weather)
      );





*/
