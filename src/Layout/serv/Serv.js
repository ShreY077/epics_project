import React from 'react'
import './serv.css'
import { FaHome, FaInfoCircle, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Serv() {
return (
  <div className="sidenavv">
    <div className="sidenav-logov">Services</div>
    <ul className="sidenav-linksv">
      <li>
        <a href="http://127.0.0.1:5500/web/indexx.html">
          <FaHome /> Ml model
        </a>
      </li>
      <li><Link to='/sign_video' > <FaInfoCircle /> SignVideos </Link></li>
      <li><Link to='/History' > <FaInfoCircle /> History </Link></li>
    </ul>
  </div>
);

};

export default Serv