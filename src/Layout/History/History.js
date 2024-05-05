import React,{useState,useContext} from 'react'
import "./History.css"
import { FaHome, FaInfoCircle, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserContext } from '../../asset/User';


function History() {
  const { user, setUser } = useContext(UserContext);
  console.log(user)
  
    return (



      <div>
      <div className="sidenavv">
      <div className="sidenav-logov">Services</div>
      <ul className="sidenav-linksv">
        <li>
          <a href="http:127.0.0.1:5500/web/indexx.html">
            <FaHome /> Ml model
          </a>
        </li>
        <li><Link to='/sign_video' > <FaInfoCircle /> SignVideos </Link></li>
        <li>
          <li><Link to='/History' > <FaInfoCircle /> History </Link></li>
        </li>
      </ul>
    </div>


       <div className="cardHistory">
         <div className="fieldHistory">
           <label htmlFor="hand">Hand:</label>
         </div>
         <div className="fieldHistory">
           <label htmlFor="gesture">Gesture:</label>
           
         </div>
       </div>
      </div>
    );
  }


export default History