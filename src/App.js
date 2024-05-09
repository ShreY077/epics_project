// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Layout/Homepage/Home';
import Serv from './Layout/serv/Serv';
import Login from './Layout/Login/Login';
import About from './Layout/About/about';
import Contact from './Layout/Contacts/contact';
import Members from './Layout/Members/member'; // Corrected import path
import Navbar from './Layout/NavBar/Navbar';
import { UserProvider } from './asset/User';
import SignVideo from './Layout/serv/serv_video/serv_video'; // Corrected component name
import History from './Layout/History/History';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Walls' element={<Serv />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign_video' element={<SignVideo />} /> {/* Corrected component name */}
          <Route path='/member' element={<Members />} /> {/* Corrected import path */}
          <Route path='/History' element={<History />} />

        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
