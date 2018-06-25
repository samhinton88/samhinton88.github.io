import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/apidemy' exact component={ApidemyApp} />

      </Switch>
    </BrowserRouter>
  </Provider>
);
