import React from 'react'
import home from '../../imgs/home1.jpg'
import './home.css'

function Home() {
  return (
    <>
        <div className='container'>
          <div className='c1'>
            <img className= "h_img" src={home} alt="blob"/>
          </div>
          <div className='c2'>
            <div className='dialuge'> MAKING LIFES BETTER. </div>
          </div>
        </div>
    </>
  )
}   

export default Home