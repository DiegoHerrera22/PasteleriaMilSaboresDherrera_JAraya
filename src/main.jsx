import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Import Bootstrap's compiled CSS.  This import must occur before any component
// imports to ensure styles are available.
import 'bootstrap/dist/css/bootstrap.min.css';

// Mount the React application.  Vite injects the root div defined in index.html.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);