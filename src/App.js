import * as React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';

function App() {
  return (
      <BrowserRouter>
          <div style={{fontFamily: "Montserrat"}}>
            <Header />
            <Home  />
            <About />
            <MyWork />
            <Contact />
        </div>
      </BrowserRouter>
  );
}

export default App;
