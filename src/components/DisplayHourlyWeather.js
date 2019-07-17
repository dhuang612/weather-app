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
    const dataSet = [].concat(this.state.HourlyWeather);
    console.log(dataSet);
    dataSet.filter((item, i) => console.log(item[i]));

    console.log(dataSet);
  };

  render() {
    return <div>Show hourly weather</div>;
  }
}
export default HourlyWeather;

/*
.filter(item => item.dt_txt.indexOf(this.curday('-') > -1))


      {dataSet.map(item => ({ temp: item.temp }))}


      {dataSet.map(function(item) {
          return item.temp;
        })}

            const { dataSet } = this.props;
    dataSet.forEach(item => console.log(item));
*/
