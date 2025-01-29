import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BusinessList />
    </div>
  );
}

export default App;
