import React from 'react';
import './App.css';
import Episodes from './components/Episodes';
import TheCast from './components/TheCast';
import Top from './components/Top';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <Top></Top>
      <TheCast></TheCast>
      <Episodes></Episodes>
      <Location></Location>
    </div>
  );
}

export default App;
