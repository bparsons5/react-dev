import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <Router>
      <Header title='React'/>
      <div className="container">

        <Routes>
          <Route path='/' exact element={
            <>
              <p>holder</p>
              <br />
            </>
          }/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
