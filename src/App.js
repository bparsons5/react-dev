import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Container from 'react-bootstrap/Container';
import $ from 'jquery';

import Header from './components/Header'
import Acknowledgements from './components/Acknowledgements'
import Title from './components/Title'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' exact element={
            <>
              <Header title='React'/>

              <Container>
                <Title />

                {/* About */}
                <About /> 
                {/* Experience */}
                <Experience />
                {/* Projects */}
                <Projects />
                {/* Contact */}
                <Contact />

                <Acknowledgements />
              </Container>

              <Footer />
            </>
          }/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
    </Router>
  );
}


export default App;
