import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import DisplayWeather from './DisplayWeather';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCurrentWeather: this.props,
      fetchedWeatherData: this.props
    };
  }
  render() {
    const { showCurrentWeather, fetchedWeatherData } = this.state;

    if (this.state.showCurrentWeather) {
      console.log(fetchedWeatherData);
      return (
        <div className="ui container">
          <Router>
            <Redirect
              to={{
                pathname: '/',
                state: { fetchedWeatherData: true }
              }}
            />
          </Router>
        </div>
      );
    }
  }
}
export default Sidebar;

/*
re renders the component t
    <Link
            to={{
              pathname: '/',
              component: { DisplayWeather },
              state: { showHourlyWeather: false }
            }}
          >
            Go back to current weather
          </Link>

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

  <Route
              exact
              path="/"
              render={props => (
                <DisplayWeather {...props} fetchedWeatherData={true} />
              )}
            />


*/
