import React from 'react';
import { FaHome, FaInfoCircle, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './serv_video.css';
import test from '../../../imgs/thumbsUp.mp4'
import thumbsUp from '../../../imgs/videoplayback.webm'



const videoData = [
  { id: 1, source: test, description: 'react-router-domreact-router-dom' },
  { id: 2, source: thumbsUp, description: 'Thumbs Up Gesture' },
  { id: 3, source: test, description: 'react-router-domreact-router-dom' },
  { id: 4, source: test, description: 'react-router-domreact-router-dom' },
  { id: 5, source: test, description: 'react-router-domreact-router-dom' },
  { id: 6, source: test, description: 'react-router-domreact-router-dom' },
  { id: 7, source: test, description: 'react-router-domreact-router-dom' },
  { id: 8, source: test, description: 'react-router-domreact-router-dom' },
  { id: 9, source: test, description: 'react-router-domreact-router-dom' },
  { id: 10, source: test, description: 'react-router-domreact-router-dom'  },
];

function ServVideo() {
  return (
    <div className="serv_video_container">
      <div className="sidenav">
        <div className="sidenav-logo">Services</div>
        <ul className="sidenav-links">
          {/* <li>
            <Link to="/serv"><FaHome /> ML Model</Link>
          </li> */}
          <li>
        <a href="http://localhost:3400/web/indexx.html">
          <FaHome /> Ml model
        </a>
      </li>
          <li>
            <Link to="/sign_video"><FaInfoCircle /> SignVideos</Link>
          </li>
          <li><Link to='/History' > <FaInfoCircle /> History </Link></li>

        </ul>
      </div>
      <div className="video-grid">
        {videoData.map((video) => (
          <div key={video.id} className="video-item">
            <video controls className="video-player">
              <source src={video.source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="video-description">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServVideo;
