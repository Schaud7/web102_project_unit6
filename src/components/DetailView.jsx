import React from 'react';
import { useParams } from 'react-router-dom';

function DetailView({ history }) {
  const { city } = useParams();
  const cityData = history.find((weather) => weather.city_name === city);

  if (!cityData) {
    return <p>No data available for this city.</p>;
  }

  return (
    <div className="detail-view">
      <h2>Detailed Weather for {cityData.city_name}</h2>
      <p>Temperature: {cityData.temp} °C</p>
      <p>Weather: {cityData.weather.description}</p>
      <p>Humidity: {cityData.rh}%</p>
      <p>Wind Speed: {cityData.wind_spd} m/s</p>
      <p>Pressure: {cityData.pres} mb</p>
    </div>
  );
}

export default DetailView;
