// components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About This Weather App</h2>
      <p>
        This app allows you to search for weather information by city and view real-time data, including temperature,
        humidity, and wind speed. You can view historical data for each city and see trends with visualizations.
      </p>
      <p>
        Built using React, Recharts, and the Weatherbit API, this app is designed to be both informative and easy to
        navigate.
      </p>
    </div>
  );
}

export default About;
