import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const currentname = 'Hello World'


ReactDOM.render(
  <React.StrictMode>
    <App text={currentname} showRed showSizeLetters/>
  </React.StrictMode>,
  document.getElementById('root')
);

