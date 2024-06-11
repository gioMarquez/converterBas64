

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Views/Home';
import PdfView from '../Views/PdfView';

const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf" element={<PdfView />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
