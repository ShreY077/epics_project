import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import "./App.css"
import Home from './Layout/Homepage/Home'
import Serv from './Layout/serv/Serv'
import Login from './Layout/Login/Login'
import About from './Layout/About/about'
import Contact from './Layout/Contacts/contact'

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path= '/' element={<Home/>} />
      <Route path="/Walls" element={<Serv />} />
      <Route path='/login' element ={<Login/>} />
      <Route path='/about' element ={<About/>} />
      <Route path='/contact' element ={<Contact/>} />
    </Routes>
   </Router>
   
  )
}

export default App