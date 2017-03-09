import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { App } from './components';
import './components/bundle.scss';

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('react-root'));
