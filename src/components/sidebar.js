import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import DisplayWeather from './DisplayWeather';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentweatherprops: this.props
    };
  }
  render() {
    return (
      <div className="ui container">
        <Router>
          <Route
            exact
            path="/"
            component={DisplayWeather}
            currentweatherprops={this.state.currentweatherprops}
          />
        </Router>
      </div>
    );
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

<Route exact path="/" component={DisplayWeather} />

*/
