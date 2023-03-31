import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context';
import 'normalize.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode >
  </AppProvider>
);
reportWebVitals();
