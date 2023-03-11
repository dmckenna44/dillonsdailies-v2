import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Poem from './Poem';
import Quote from './Quote';
import Fact from './Fact';
import Highlight from './Highlight';
import Joke from './Joke';
import Recipe from './Recipe';

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/poem" element={<Poem />}/>
            <Route path="/joke" element={<Joke />}/>
            <Route path="/fact" element={<Fact />}/>
            <Route path="/highlight" element={<Highlight />}/>
            <Route path="/quote" element={<Quote />}/>
            <Route path="/recipe" element={<Recipe />}/>
          </Routes>
        </div>
      </div>
    </Router>
  )

}

export default App;