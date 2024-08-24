import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, Provider } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import store from './store/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
