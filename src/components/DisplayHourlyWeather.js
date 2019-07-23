import React, { Component } from 'react';
import { isTemplateElement } from '@babel/types';
//refactor the dataset so that there are less pieces of state
class HourlyWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HourlyWeather: this.props,
      HourlyData: []
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

    return [...temp, ...weather, ...time];
  };

  sortHourlyData = data => {
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

    const AddIdToSortedData = dataSet[0].forEach((item, i) => {
      item.id = i + 1;

      console.log(dataSet);
    });

    this.setState({ HourlyData: dataSet[0] });

    //next steps get data from new object and sort into arrays to save in state.
  };

  render() {
    console.log(this.state.HourlyData);
    const { HourlyData } = this.state;
    return (
      <div>
        <h1>Hourly weather</h1>
        {HourlyData.map((item, index) => {
          console.log(HourlyData);

          return (
            <div className="ui container">
              <table className="ui  table">
                <thead>
                  <tr className="center aligned">
                    <th className="center aligned">time</th>
                    <th className="center aligned">temperature</th>
                    <th className="center aligned">weather</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="center aligned">
                    <td key={item.id} className="center aligned">
                      {item.dt}
                    </td>
                    <td className="center aligned">{item.temp}</td>
                    <td className="center aligned">{item.weather}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}

        <div />
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

    for (let i = 0; i < deconstructData.length; i++) {
      this.setState({
        sortedHourlyWeather: {
          temp: [...deconstructData[i].temp],
          time: [...deconstructData[i].time],
          weather: [...deconstructData[i].weather]
        }
      });
    }
     const deconstructData = Array.from(dataSet[0], this.sortValues);
    console.log(deconstructData);

return { temp: temp, time: time, weather: weather };

this.setState({ hourly: arrayOfHourlyData })
and then you use this.state.hourly.map() in your render function

{this.state.HourlyData.map(function(item) {
          return console.log(item);
        })}
  for (let x = 0; x < dataSet.length; x++) {
        dataSet[x][i].id = i + 1;



*/
