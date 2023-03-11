import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>

          </Routes>
        </div>
      </div>
    </Router>
  )

}