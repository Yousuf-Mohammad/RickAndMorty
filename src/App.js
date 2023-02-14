import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import CastPage from './components/CastPage';
import Home from './components/Home';
import IndividualCast from './components/IndividualCast';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/theCast' element={<CastPage />}></Route>
          <Route path='/theCast/:id' element={<IndividualCast />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
