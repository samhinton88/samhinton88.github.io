import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import ApidemyApp from './apidemy/App';

import apidemyApp from './apidemy/reducers';



const store = createStore(apidemyApp, {}, applyMiddleware(reduxThunk));


export default (
  <Provider store={store}>
    <ApidemyApp />
  </Provider>
);
