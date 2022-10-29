import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import FancyBurger from './component/FancyBurger';


export const langContext  = createContext<String | null>(null)
function App() {
  //  const language = localStorage.getItem('lang' || "English")
  //  console.log(language)
  return (
    <div className="App">
      {/* <langContext.Provider  value={language}> */}
      <FancyBurger/>
      <Navbar/>
      <Home/>
     

      {/* </langContext.Provider> */}
     
    </div>
  );
}

export default App;
