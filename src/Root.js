import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import ApidemyApp from './apidemy/App';

import apidemyApp from './apidemy/reducers';



const store = createStore(apidemyApp, {}, applyMiddleware(reduxThunk));
console.log('process', process)
console.log('public url',process.env.PUBLIC_URL)

export default (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/apidemy'  component={ApidemyApp} />
      </Switch>
    </HashRouter>
  </Provider>
);
