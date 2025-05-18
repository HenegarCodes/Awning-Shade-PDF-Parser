import Homepage from './homepage';
import UpdatePricing from './updatePricing';
import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/updatePricing" element={<UpdatePricing />} />
  </Routes>
  )
}

export default App
