import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Social from './components/Social'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' exact element={
            <>
              <Header title='React'/>
              <div className="container">
                  <div className='section'>
                      <h5>hello, my name is</h5>
                      <h1>Brett Parsons.</h1>
                      <h3>I am a developer who's always looking for an interesting project.</h3>
                      <h6>Description</h6>
                  </div>
                  <About />
                  <About />
                  <About />
                  <About />
                  <Footer />
              </div>
              <div id="blur-bottom"></div>
              <Social />
            </>
          }/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
    </Router>
  );
}

export default App;
