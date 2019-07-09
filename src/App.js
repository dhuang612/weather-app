import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import DisplayWeather from './components/DisplayWeather';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: ''
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Weather forcast</h1>
        <DisplayWeather />
      </div>
    );
  }
}

export default App;
