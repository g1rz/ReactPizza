import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rooteReducer from './reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rooteReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
