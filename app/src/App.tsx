import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Routes, Route, Router } from "react-router-dom";

import NavBar from './components/Nav/NavBar';
import Home from './components/Home'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/about" element={<Home />}/>
      </Routes>
      <header className="App-header">
      </header>
    </div>
  );
}