import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {configureStore} from './store'
import * as actions from './actions'
const tracks = [
    {
      id: 1,
      title: 'Em của ngày hôm qua'
    },
    {
      id: 2,
      title: 'Cơn mưa ngang qua'
    }
  ];

const store = configureStore()
store.dispatch(actions.setUsers(tracks))


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
