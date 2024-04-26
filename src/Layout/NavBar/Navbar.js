import React,{useState,useEffect} from 'react'
import './navbar.css'
import { Link, useLocation,useNavigate } from 'react-router-dom';
import logoSvg from '../../imgs/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faPhone,faAddressCard,faUser, } from '@fortawesome/free-solid-svg-icons'
import {faUsps} from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';


function Navbar() {
const location = useLocation();
const navigate = useNavigate()
const [user,setUser] = useState(null);
const [isUser,setIsUser]=useState(null);
useEffect(()=>{
  
  const res = async()=>{
    var ans = await axios.get('http://localhost:3300/v1/isUser',{
      withCredentials: true
});
  ans = ans.data
    console.log(ans.user);
    if(ans.isUser) 
    {
      setIsUser(true)
      setUser(ans.user)
    }
    return ans.data;
  }
  res();

},[])

const logout = async()=>{
  await axios.get('http://localhost:3300/v1/logout',{
    withCredentials:true,
  });
  setIsUser(false);
  setUser(null);
  navigate('/');
}


return (
  <div className='barr'>
    <img className='logo' src={logoSvg} alt='logo'/>
      <nav className='Nav'>
        <li><Link className={`lnk ${location.pathname === '/' ? 'active':''}`} to='/' ><FontAwesomeIcon icon={faHouse} /></Link></li>
        <li><Link className={`lnk ${location.pathname === '/Walls' ? 'active':''}`} to='/Walls' ><FontAwesomeIcon icon={faUsps} /></Link></li>
        <li><Link className={`lnk ${location.pathname === '/about' ? 'active':''}`} to='/about' ><FontAwesomeIcon icon={faPhone} /></Link></li>
        <li><Link className={`lnk ${location.pathname === '/contact' ? 'active':''}`} to='/contact' ><FontAwesomeIcon icon={faAddressCard} /></Link></li>
        {!isUser ? (
            <li>
              <Link className={`lnk ${location.pathname === '/login' ? 'active' : ''}`} to='/login'>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          ) : (
            <li>
              <span onClick={logout}>{user}  </span>
              
            </li>
          )}
      </nav>
  </div>
  )
}
export default Navbar