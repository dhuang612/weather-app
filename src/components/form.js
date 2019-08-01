import React from 'react';
class Form extends React.Component {
  //controlled input form
  render() {
    return (
      <form onSubmit={this.props.loadWeather}>
        Please enter city name and country for weather information <br />
        <label htmlFor="cityname">City name</label>
        <input type="text" name="city" placeholder="City.." />
        <label htmlFor="country">Country</label>
        <input type="text" name="country" placeholder="Country.." />
        <button>Get weather</button>
      </form>
    );
  }
}

export default Form;
