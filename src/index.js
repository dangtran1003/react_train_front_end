import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {configureStore} from './store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from './store'
// import * as actions from './actions'
const users = [{username:'xhuiklm10',email:'thdang1003@gmail.com',name:'Tran Hai Dang'}]

const store = configureStore()
ReactDOM.render(<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
