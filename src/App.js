import React from 'react';
import './App.css';
import BusinessList from './components/Business/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      <SearchBar />
      <Container>
        <BusinessList />
      </Container>
    </div>
  );
}

export default App;
