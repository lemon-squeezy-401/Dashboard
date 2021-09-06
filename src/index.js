import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GetUsersProvider from '../src/Data/getUsers';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GetUsersProvider>
        <App />
      </GetUsersProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
