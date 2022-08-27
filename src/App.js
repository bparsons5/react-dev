import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Container from 'react-bootstrap/Container';
import $ from 'jquery';

import Header from './components/Header'
import Footer from './components/Footer'
import Title from './components/Title'
import Dashboard from './components/Dashboard'
import Social from './components/Social'
import Email from './components/Email'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' exact element={
            <>
              <Header title='React'/>

              <Container>
                <Title />
                <Title />
                <Title />
                <Title />
                <Title />
                <Footer />
              </Container>

              <div id="blur-bottom"></div>
              <Social />
              <Email />
            </>
          }/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
    </Router>
  );
}

$(function() {
  if (window.innerWidth > 767) {
    const titleMargin = "calc(50vh - " + document.getElementById('title').offsetHeight / 2 + "px)"
    document.getElementById('title').style.marginTop = titleMargin
    document.getElementById('title').style.marginBottom = titleMargin
  } else {
    document.getElementById('title').style.marginTop = "calc(40vh - " + document.getElementById('title').offsetHeight / 2 + "px)"
    document.getElementById('title').style.marginBottom = "calc(60vh - " + document.getElementById('title').offsetHeight / 2 + "px)"
  }
});


export default App;
