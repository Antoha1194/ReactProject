import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Route from './components/Route.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route/>
  </BrowserRouter>
    ,
    document.getElementById('root')
  );
