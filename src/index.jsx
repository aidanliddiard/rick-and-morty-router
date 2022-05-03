import React from 'react';
import { render } from 'react-dom';
import reactRouterDom from 'react-router-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
