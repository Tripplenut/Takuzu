// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

// Component imports
import Home from './Pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);