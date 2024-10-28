import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DetailView from './components/DetailView';
import About from './components/About';
import './App.css';

function App() {
  const [history, setHistory] = useState([]);

  return (
    <Router>
      <div className="app-container">
        <nav className="top-navbar">
          <h1 className="navbar-title">Weather App</h1>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="sideNav">
          <h2>Search History</h2>
          <ul>
            {history.map((weather, index) => (
              <li key={index}>
                <Link to={`/detail/${weather.city_name}`}>{weather.city_name}, {weather.country_code}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard setHistory={setHistory} history={history} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:city" element={<DetailView history={history} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
