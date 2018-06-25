import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import ApidemyApp from './apidemy/App';

import apidemyApp from './apidemy/reducers';

console.log('apidemyApp reducer in Root.js',apidemyApp)
console.log('ApidemyApp component in Root.js', ApidemyApp)

const store = createStore(apidemyApp, {}, applyMiddleware(reduxThunk));

export default (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/apidemy' component={ApidemyApp} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
