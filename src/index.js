import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Route from './components/Route.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import data from './store';

import { PersistGate } from 'redux-persist/integration/react'
const { store, persistor } = data();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Route/>
      </BrowserRouter>
    </PersistGate>
    
  </Provider>
 
    ,
    document.getElementById('root')
  );

