import React from 'react';

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
  return WeatherInfo.map(item => (
    <div>
      <span>{item.day}</span>
      {item.high}
      {item.low}
      {item.weather}
    </div>
  ));
};
export default DisplayWeather;
