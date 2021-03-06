import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
//what?? need to see when this was added.
import { isTemplateElement } from '@babel/types';
import DisplayWeather from './DisplayWeather';
import Sidebar from './sidebar';
import SwapToCurrent from '../App';

//refactor the dataset so that there are less pieces of state
class HourlyWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HourlyWeather: this.props,
      currentweatherprops: this.props,
      HourlyData: [],
      showCurrentWeather: false,
      currenttime: this.props,
      redirect: false
    };
  }
  async componentDidMount() {
    await this.sortHourlyData();
  }

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
  handleSubmit = () => {
    this.setState({ showHourlyWeather: !this.state.showHourlyWeather });
  };
  /*
 this.setState({ showHourlyWeather: !this.state.showHourlyWeather });
  */

  render() {
    const {
      HourlyWeather,
      HourlyData,
      showCurrentWeather,
      redirect
    } = this.state;
    if (!this.state.showCurrentWeather) {
      return (
        <div>
          <h1>Hourly weather</h1>

          {HourlyData.map((item, index) => {
            return (
              <div className="ui container">
                <table className="ui basic table">
                  <thead>
                    <tr className="center aligned six wide">
                      <th className="center aligned six wide">time</th>
                      <th className="center aligned six wide">temperature</th>
                      <th className="center aligned six wide">weather</th>
                      <th className="center aligned six wide">
                        <img
                          src={
                            'https://openweathermap.org/img/wn/' +
                            item.weatherIcon +
                            '.png'
                          }
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="center aligned">
                      <td key={item.id} className="center aligned six wide">
                        {item.dt}
                      </td>
                      <td className="center aligned six wide">{item.temp}</td>
                      <td className="center aligned six wide">
                        {item.weather}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
          <button
            onclick={this.handleSubmit}
            fetchedWeatherData={this.state.fetchedWeatherData}
          >
            current
          </button>
        </div>
      );
    }
    if (!this.state.redirect) {
      return (
        <SwapToCurrent fetchedWeatherData={this.state.fetchedWeatherData} />
      );
    }
  }
}
export default HourlyWeather;

/*
///////////////
pass the state down as props?
////////////

  if (!this.state.showHourlyWeather) {
      return <HourlyWeather hourlyWeather={this.state.hourlyWeather} />;
    }
clicking the button right now is returning to the top of the previous component.

//else if statement to try and render current weather.
else if (!this.state.redirect) {
      return <SwapToCurrent />;
    }

  <Link to="/current">Current weather</Link>
*/
