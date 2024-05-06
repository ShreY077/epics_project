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
            <br/>
            <li><Link to="/Member">Members</Link></li>
            <br/>
            <li><Link to="/contact" >Connect with us </Link></li>
        </ul>
    </div>
<div className="about animate-box">
    <h1 className='title_h1'>MOVE MENTOR</h1>
    <h2 className='about_h2'>About Us</h2>
    <div className="row">
            <p>hand recognition website that serves as a bridge between sign language.</p>

            <p>With cutting-edge technology, this platform empowers individuals who use sign language to effortlessly express themselves in digital spaces </p>

            <p>Through a simple webcam interface, users can convey their messages using sign language</p>

            <div className="row">
                <div>
                    <p> and the website swiftly interprets their gestures with precision.</p>
                    <p>Instantaneously, the interpreted signs are transformed into clear, concise text, ensuring seamless communication for both deaf and hearing individuals,</p>
                </div>
            </div>


            <p>breaking down barriers and fostering understanding across diverse communities.</p>

            <p>I hope you like our website.</p>
            </div>
        </div>
    </>

  )
}

export default about