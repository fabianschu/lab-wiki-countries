import React from 'react';
import './App.css';
import CountryDetails from "./components/CountryDetails";
import NavBar from "./components/NavBar";
import Container from './components/Container';
import * as data from  "./countries.json";
import CountryList from './components/CountryList';


function App() {
  let countries = data.default;
  return (
    <div className="App">
      <NavBar />
      <Container countries={countries}/>
    </div>
  );
}

export default App;
