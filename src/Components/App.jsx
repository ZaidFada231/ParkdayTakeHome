import './styles/App.css';
import Typewriter from "typewriter-effect";
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Papa from "papaparse";
import Home from "./Home";
import CsvParser from './CsvParser';

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} /> //setting up routing using react router dom 
      <Route path="/csv/:service_id" element={<CsvParser />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
