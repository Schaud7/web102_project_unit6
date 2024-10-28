import React, { useState, useEffect } from 'react';
import TemperatureChart from './TemperatureChart';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

function Dashboard({ setHistory, history }) {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const fetchWeatherData = async (city) => {
    if (!city) return;

    const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=b50262ff09f44b8fa6c31cb3f1faccef`);
    if (!response.ok) {
      setMessage('Failed to fetch weather data.');
      return;
    }

    const data = await response.json();
    const newWeather = data.data[0];

    if (newWeather) {
      setWeatherData(newWeather);
      setHistory((prevHistory) => [...prevHistory, newWeather]);
      setMessage('');
    } else {
      setMessage('No data found for this location.');
    }
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(location);
    setLocation('');
  };

  useEffect(() => {
    fetchWeatherData('New York');
  }, []);

  return (
    <div className="dashboard">
      <h1>Weather Finder</h1>
      <form onSubmit={handleLocationSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div className="weather-info">
          <h2>Current Weather in {weatherData.city_name}</h2>
          <p>Temperature: {weatherData.temp} °C</p>
          <p>Weather: {weatherData.weather.description}</p>
          <p>Humidity: {weatherData.rh}%</p>
          <p>Wind Speed: {weatherData.wind_spd} m/s</p>
        </div>
      )}
      {message && <p className="error-message">{message}</p>}
      <div className="charts-container">
        <div className="chart-section">
          <h3>Temperature Chart</h3>
          <TemperatureChart temp={weatherData ? weatherData.temp : 0} />
        </div>
        <div className="chart-section">
          <h3>Temperature Trends Across Cities</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={history}>
              <XAxis dataKey="city_name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="temp" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
