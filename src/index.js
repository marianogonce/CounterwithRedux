import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';
import store from './reducer/store';
import {Provider} from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
