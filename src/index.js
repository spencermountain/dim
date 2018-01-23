import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './home/Index';
import Color from './color/Index';

const router = function() {
  if (window.location.hash) {
    return <Color color={window.location.hash}/>
  } else {
    return <Home/>
  }
}

ReactDOM.render(
  router(),
  document.getElementById('root')
);
