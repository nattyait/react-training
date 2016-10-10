import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux'
import counterReducer from './reducers/counterReducer'

const store = createStore(
  counterReducer, 10,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  //ส่ง store ไป app
  <App store={store}/>,
  document.getElementById('root')
);
