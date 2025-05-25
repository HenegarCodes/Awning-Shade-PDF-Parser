import Homepage from './homepage';
import UpdatePricing from './updatePricing';
import CreateQuote from './quote';
import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UploadExcel from './uploadExcel';

function App() {


  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/updatePricing" element={<UpdatePricing />} />
    <Route path="/quote" element={<CreateQuote />} />
    <Route path="/uploadExcel" element={<UploadExcel />} />


    
  </Routes>
  )
}

export default App
