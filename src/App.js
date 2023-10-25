import * as React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Fade from 'react-reveal/Fade';

function App() {
  return (
      <BrowserRouter>
          <div style={{fontFamily: "Montserrat", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Header />
            <Fade >
            <Home  />
            <About />
            <MyWork />
            <Contact />
            </Fade>
        </div>
      </BrowserRouter>
  );
}

export default App;
