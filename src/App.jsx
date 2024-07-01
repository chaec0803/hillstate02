import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Basic from 'pages/Basic';
import Home from 'pages/Home';
import Premium from 'pages/parcel/Premium';
import ParcelLayout from 'pages/parcel/ParcelLayout';
import Design from 'pages/goods/Design';
import Community from 'pages/goods/Community';
import Smart from 'pages/goods/Smart';
import Space from 'pages/Space';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/parcel/premium" element={<Premium />} />
        <Route path="/parcel/layout" element={<ParcelLayout />} />
        <Route path="/goods/design" element={<Design />} />
        <Route path="/goods/community" element={<Community />} />
        <Route path="/goods/smart" element={<Smart />} />
        <Route path="/space" element={<Space />} />
      </Routes>
    </Router>
  );
}

export default App;
