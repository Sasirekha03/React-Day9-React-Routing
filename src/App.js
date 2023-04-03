import React from 'react';
import {  BrowserRouter,Routes, Route } from 'react-router-dom';

import Naving from './Naving';
import Home from './Home';
import Singers from './Singers';
import Albums from './Albums';
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Naving />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/singers" element={<Singers/>} />
          <Route path="/albums" element={<Albums/>} />
        </Routes>
      </div>
      </BrowserRouter>
   
  );
};

export default App;
