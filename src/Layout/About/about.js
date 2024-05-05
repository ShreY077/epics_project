import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import Navbar from '../NavBar/Navbar'

function about() {

  return (
    <>
        {/* <Navbar/> */}
        <div className="col-md-12 about">
        <h1>About</h1>

        <ul className='about_ul'>
            <br/>
            <li><Link to="#">History </Link></li>
            <br/>
            <li><Link to="#">Members </Link></li>
            <br/>
            <li><Link to="/Contacts" >Connect with us </Link></li>
        </ul>
    </div>
<div className="about animate-box">
    <h2 className='about_h2'>History</h2>
    <div className="row">
            <p>Founder of this webpage shri Abu Sheikh .</p>

            <p>Introduced this site so that he can manipulate your data while keeping in the database and may use in future if found with highly authorized data </p>

            <p>Site is highly trusted and its not encrypted to users</p>

            <div className="row">
                <div>
                    <p>His Son Shri Yasheer Sheikh is not identified and authorized for the liabilites</p>
                    <p>Key features of this site is intake of users wallpaper and keeping it safe on the website </p>
                </div>
            </div>


            <p>Our Website is highly Secure and Trusted and is managed by Aayush</p>

            <p>I hope you got to know about our website</p>
            </div>
        </div>
    </>

  )
}

export default about