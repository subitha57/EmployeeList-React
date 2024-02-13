import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import About from './About';
import TestLink from './TestLink';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
