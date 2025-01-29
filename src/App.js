import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
