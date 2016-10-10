import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux'
import counterReducer from './reducers/counterReducer'
import Provider from './components/Provider'

const store = createStore(
  counterReducer, 10,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  //ส่ง store ไป app
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
