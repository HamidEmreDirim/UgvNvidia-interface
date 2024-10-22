import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './SideBar';
import Control from './Control';  // Your control component
import Map from './Map';  // Your map component
import './App.css';  // Import App.css for global styles

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '40px', padding: '40px' }}>
          <Routes>
            <Route path="/" element={<Control />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
