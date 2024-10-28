import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function TemperatureChart({ temp }) {
  const data = [
    { name: 'Current', temp },
    { name: 'Feels Like', temp: temp - 2 },
    { name: 'Max Temp', temp: temp + 3 },
    { name: 'Min Temp', temp: temp - 3 }
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="temp" stroke="#4e54c8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TemperatureChart;
