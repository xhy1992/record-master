import React from 'react';
import ReactDOM from 'react-dom';
import {
	createStore,
	applyMiddleware
} from 'redux';
import {
	Provider
} from 'react-redux';
import thunk from 'redux-thunk';
import reduce from './reducers/reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reduce, applyMiddleware(thunk));
const state = store.getState();
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();