import React,{useState,useContext} from 'react'
import './navbar.css'
import { Link, useLocation,useNavigate } from 'react-router-dom';
import logoSvg from '../../imgs/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faPhone,faAddressCard,faUser, } from '@fortawesome/free-solid-svg-icons'
import {faUsps} from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';
import { UserContext } from '../../asset/User';


function Navbar() {
const location = useLocation();
const navigate = useNavigate()
const { user, setUser } = useContext(UserContext);



console.log(user)

const logout = async()=>{
  await axios.get('http://localhost:3300/v1/logout',{
    withCredentials:true,
  });
  setUser(null);
  navigate('/');
}


return (
  <div className='barr'>
    <img className='logo' src={logoSvg} alt='logo'/>
      <nav className='Nav'>
        <li><Link className={`lnk ${location.pathname === '/' ? 'active':''}`} to='/' ><FontAwesomeIcon icon={faHouse} /></Link></li>
        <li><Link className={`lnk ${location.pathname === '/Walls' ? 'active':''}`} to='/Walls' ><FontAwesomeIcon icon={faUsps} /></Link></li>
        <li><Link className={`lnk ${location.pathname === '/contact' ? 'active':''}`} to='/contact' ><FontAwesomeIcon icon={faPhone} /></Link></li>
        <li><Link className={`lnk ${location.pathname === '/about' ? 'active':''}`} to='/about' ><FontAwesomeIcon icon={faAddressCard} /></Link></li>
        {user===null ? (
            <li>
              <Link className={`lnk ${location.pathname === '/login' ? 'active' : ''}`} to='/login'>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          ) : (
            <li>
              <span onClick={logout}>{user.name}  </span>
            </li>
          )}
      </nav>
  </div>
  )
}
export default Navbar