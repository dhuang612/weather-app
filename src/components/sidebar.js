import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from './history';
import DisplayWeather from './DisplayWeather';
const history = createBrowserHistory;
console.log(location);
class Sidebar extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Route component={DisplayWeather} />
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
