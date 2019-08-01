import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import DisplayWeather from './DisplayWeather';

const Sidebar = () => {
  return (
    <div className="ui container">
      <Router>
        <Link
          to={{
            pathname: '/',
            component: { DisplayWeather },
            state: { showHourlyWeather: false }
          }}
        >
          Go back to current weather
        </Link>
        <Router path="/" exact component={DisplayWeather} />
      </Router>
    </div>
  );
};
export default Sidebar;
