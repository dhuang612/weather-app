import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import DisplayWeather from './components/DisplayWeather';
import DisplayHourlyWeather from './components/DisplayHourlyWeather';
import './App.css';

export const SwapToCurrent = ({ component: Component }) => {
  return (
    <Route
      render={props =>
        DisplayWeather.fetchedWeatherData === true ? (
          <DisplayWeather {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/current',
              state: { fetchedWeatherData: true }
            }}
          />
        )
      }
    />
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>Weather forecast</h1>

        <DisplayWeather />

        <Route path="/hourly" component={DisplayHourlyWeather} />
      </div>
    );
  }
}

export default App;

/*
make a home page as a landing area?
 <Route path="/" component={DisplayWeather} />

   <Route path="/current" exact component={DisplayWeather} />


   <Route
          path="/current"
          render={props => <DisplayWeather {...props} />}
        />

         <Route path="/" component={DisplayWeather} />
*/
