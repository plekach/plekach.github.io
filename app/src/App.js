import * as React from 'react';
import './App.css';
import { BrowserRouter, useNavigate } from 'react-router-dom';

import Header from './components/Header/Header';
function App() {
  return (
    <div>
      <BrowserRouter>
      Paige Lekach
      <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
