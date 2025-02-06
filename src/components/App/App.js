import React, { useState } from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import { Container } from "@mui/material";
import fetchData from "../../Utils/ApiHelper";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const search = async (term, location, sortBy) => {
    let businesses = await fetchData(term, location, sortBy);
    setBusinesses(businesses);
    console.log(businesses);
  };

  return (
    <div>
      <SearchBar searchYelp={search} />
      <Container>
        <BusinessList items={businesses} />
      </Container>
    </div>
  );
}

export default App;
