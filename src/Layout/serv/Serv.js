import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaCog } from 'react-icons/fa';
import './serv.css';

function Serv() {
  return (
    <div className="services-page">
      <h1 className="page-title">Our Services</h1>
      <div className="services-container">
        <div className="service-section">
          <h2 className="section-title">CONSULTATION</h2>
          <div className="service-box">
            <a href="http://127.0.0.1:5500/web/indexx.html" className="service-link">
              <FaHome className="service-icon" />
              <span className="service-title">ML Model</span>
            </a>
          </div>
        </div>
        <div className="service-section">
          <h2 className="section-title">BEST IDEAS</h2>
          <div className="service-box">
            <Link to='/sign_video' className="service-link">
              <FaInfoCircle className="service-icon" />
              <span className="service-title">Sign Videos</span>
            </Link>
          </div>
        </div>
        <div className="service-section">
          <h2 className="section-title">SIMPLE SETTING</h2>
          <div className="service-box">
            <Link to='/history' className="service-link">
              <FaCog className="service-icon" />
              <span className="service-title">History</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="contact-btn">
        <Link to='/contact' className="btn-contact">CONTACT US</Link>
      </div>
    </div>
  );
}

export default Serv;