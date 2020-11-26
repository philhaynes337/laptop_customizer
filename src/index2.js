import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './files/Header';
import FEATURES from './files/Features';



ReactDOM.render(
  <React.Fragment>
    <Header title='ELF Computing | Laptops' />
    <App features={FEATURES} />
  </React.Fragment>,
   document.getElementById('root')
  );
