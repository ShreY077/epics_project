import React,{useState} from 'react'
import './contact.css'
import Navbar from '../NavBar/Navbar'

function contact() {



  return (
    <>
    <Navbar/>
    <div className="contact" >
        <form action='#' className="contact_form">
            <div style={{display:'none'}}>
                <input type="hidden" />
                <input type="hidden" />
                <input type="hidden" />
                <input type="hidden" />
                <input type="hidden" />
            </div>
            <p>
               <span className="contact Name">
                 <input type="text" name="Name" value='' size="40" className="nameinput " aria-required="true" aria-invalid="false" placeholder="Name"/>
              </span>
              <span className="contact Email">
                <input type="email" name="Email" value=''  size="40" className="emailinput " aria-required="true" aria-invalid="false" placeholder="Email"/>
              </span>
              <span className="contact Subject">
                <input type="text" name="Subject" value=''  size="40" className="nameinput " aria-required="true" aria-invalid="false" placeholder="Subject" />
              </span>
              
              <span className="contact Message">
                <textarea name="Message" cols="40" value=''  rows="10" className="contact_textarea" aria-invalid="false" placeholder="Message"></textarea>
              </span>
              <input type="submit" value="Send" className="contact submit btn" />
              <img className="ajax-loader"  alt="Sending ..." style={{visibility:'hidden'}} />
          </p>
          <div className="conatct display-none">
          </div>
      </form>
    </div>
    </>
  )
}

export default contact