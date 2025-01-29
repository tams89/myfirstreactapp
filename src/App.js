import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
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
