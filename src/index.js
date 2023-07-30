import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Player from './components/Player.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.backgroundColor = "#abcdef";
root.render(
  <>
    <Player />
  </>
)