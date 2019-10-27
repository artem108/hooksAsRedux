import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { StoreProvider } from './store';
import './css/index.css';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root'));
