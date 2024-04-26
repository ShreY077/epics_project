import React from 'react'
import Navbar from '../NavBar/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import test_img from'../../imgs/login.jpg'
import './serv.css'

function Serv() {
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const res = await axios.get('http://localhost:3030/logout',{ withCredentials: true });
      console.log(res.data.msg);
    } catch (error) {
      console.error(error);
    }
  };




  const gt = async()=>{
    try {
      const res = await axios.get('http://localhost:3030/v1/serv', { withCredentials: true });
      console.log(res.data.msg)
    } catch (error) {
      console.error(error);
    }
  }
  

  var userImage  = true
  return (
    <>
      <Navbar />
      <h2>Friends List</h2>
      <ul>
       {
        (userImage) ?
        <li className='spc'>  
        <span onClick={()=>{
          getUser();
        }}> userImage </span> as</li>
        :
        <li className='spc'>  
        <span> <FontAwesomeIcon icon={faUser} /> </span> as</li>

      }
      
      {
        (userImage) ?
        <li className='spc'>  
        <span onClick={gt}> userImage </span> USer</li>
        :
        <li className='spc'>  
        <span> <FontAwesomeIcon icon={faUser} /> </span> USer</li>

      }


{
        (userImage) ?
        <li className='spc'>  
        <span> userImage </span> OKay</li>
        :
        <li className='spc'>  
        <span> <FontAwesomeIcon icon={faUser} /> </span> OKay</li>

      }


{
        (userImage) ?
        <li className='spc'>  
        <span> userImage </span> sa</li>
        :
        <li className='spc'>  
        <span> <FontAwesomeIcon icon={faUser} /> </span> as</li>

      }


{
        (userImage) ?
        <li className='spc'>  
        <span> userImage </span> sa</li>
        :
        <li className='spc'>  
        <span> <FontAwesomeIcon icon={faUser} /> </span> Abh</li>

      }

{
        (userImage) ?
        <li className='spc'>  
        <span> userImage </span> Kh</li>
        :
        <li className='spc'>  
        <span> <FontAwesomeIcon icon={faUser} /> </span> Kh</li>

      }

        
      </ul>



</> 
    
  )
}   

export default Serv