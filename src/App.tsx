import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/pages/Home';


function App() {
const personName = {
  first : 'tolu',
  last : 'alabi'
}

  return (
    <div className="App">
      <Navbar/>
      <Home/>
     
     
    </div>
  );
}

export default App;
