import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './i18n';
import 'alertifyjs/build/css/alertify.css';

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
