import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.scss';

import './common.js';

import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
