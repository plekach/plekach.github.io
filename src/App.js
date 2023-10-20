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
    <div style={{fontFamily: "Montserrat"}}>
      <BrowserRouter>
      <Header />
      <Home  />
      <About />
      <MyWork />
      <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
