import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>This is iNotebook</h1>
      <Home />
      <Navbar />
      <About/>
    </div>
  );
}

export default App;
