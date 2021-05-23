import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Route from './components/Route.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route/>
    </BrowserRouter>
  </Provider>
 
    ,
    document.getElementById('root')
  );
