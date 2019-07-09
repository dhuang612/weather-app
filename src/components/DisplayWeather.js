import React from 'react';
import './DisplayWeather.css';
import WeatherData from '../api/weatherapi';
const WeatherInfo = [
  {
    day: 'Monday',
    high: 88,
    low: 72,
    weather: 'sunny'
  },
  {
    day: 'Tuesday',
    high: 92,
    low: 84,
    weather: 'overcast'
  },
  {
    day: 'Wednesday',
    high: 79,
    low: 72,
    weather: 'rainy'
  },
  {
    day: 'Thursday',
    high: 83,
    low: 79,
    weather: 'sunny'
  },

  {
    day: 'Friday',
    high: 76,
    low: 74,
    weather: 'partly cloudy'
  }
];

const DisplayWeather = () => {
  console.log(WeatherData);
  return WeatherInfo.map(item => (
    <div className="weather">
      <span className="day">{item.day}</span>
      <span className="high">{item.high}</span>
      <span className="low">{item.low}</span>
      <span className="type"> {item.weather}</span>
      <WeatherData />
    </div>
  ));
};
export default DisplayWeather;
