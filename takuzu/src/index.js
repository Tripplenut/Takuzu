// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import './index.css';

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

// Component imports
import Router from './Components/Router'
import Navbar from './Components/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <Navbar/>
      <Router/>
    </React.StrictMode>
  </HashRouter>
);