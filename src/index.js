import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Globalstyles from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Globalstyles />
  </React.StrictMode>,
  document.getElementById('root')
);