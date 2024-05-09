import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import './History.css';

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3300/v1/history', {
      withCredentials: true,
    })
      .then(response => {
        if (response.data.msg) {
          setHistory(response.data.msg);
        } else {
          setHistory(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching history:', error);
      });
  }, []);

  const historyItems = history === "please login" 
    ? <h1>{history}</h1>
    : (
        <div className="history-grid">
          {Array.isArray(history) && history.map((item, index) => (
            <div key={index} className="history-item">
              <h3>Gesture: {item.gesture}</h3>
              <h3>Hand: {item.hand}</h3>
              <p>Time: {new Date(item.time).toLocaleString()}</p>
            </div>
          ))}
        </div>
      );

  return (
    <div className="history_container">
      <div className="sidenav">
        <div className="sidenav-logo">Services</div>
        <ul className="sidenav-links">
          <li>
            <a href="http://localhost:3400/web/indexx.html">
              <FaHome /> Ml model
            </a>
          </li>
          <li>
            <Link to="/sign_video"><FaInfoCircle /> SignVideos</Link>
          </li>
          <li>
            <Link to="/History"><FaInfoCircle /> History</Link>
          </li>
        </ul>
      </div>
      <div className="history_data">
        {historyItems}
      </div>
    </div>
  );
}

export default History;
