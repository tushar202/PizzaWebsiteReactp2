import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Menu from './pages/Menu'
function App() {
  return (
    <div className="App w-full h-full flex flex-col font-serif font-a">
    
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/menu" element={<Menu/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
