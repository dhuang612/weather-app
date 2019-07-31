import React, { Component } from 'react';
class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.loadWeather}>
          Please enter US city name for weather information <br />
          <label htmlFor="cityname">City name</label>
          <input type="text" name="city" placeholder="City.." />
          <label htmlFor="country">Country</label>
          <input type="text" name="country" placeholder="Country.." />
          <button>Get weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
