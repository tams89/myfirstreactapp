import React from 'react';
import logo from './logo.svg';
import './App.css';
import Business from './components/Business';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Business />
      </div>
    </div>
  );
}

export default App;
