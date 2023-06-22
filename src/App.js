import logo from './logo.svg';
import './App.css';
import {NavigationBar} from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { List } from "./pages/list/list";
import { Cost } from "./pages/cost/cost";
import { Favorites } from './pages/favourites/favourites'
import React, { useState, useEffect, useCallback } from 'react'
import { Container } from 'react-bootstrap';


function App() {


  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>
     
        <Routes>
          
          <Route path='/' element={<List />} />
          <Route path='/list' element={<List />} />
          <Route path='/cost' element={<Cost />} />
          <Route path='/favourites' element={<Favorites />} />
        
        </Routes>
       
      </Router>

    </div>
  );
}

export default App;
