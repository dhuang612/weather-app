import React from 'react';
import './DisplayWeather.css';
import WeatherData from '../api/weatherapi';

const DisplayWeather = () => {
  return (
    <div className="weather">
      <h1>Current temperature</h1>
      <WeatherData />
    </div>
  );
};
export default DisplayWeather;
