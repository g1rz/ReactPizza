import { createStore } from 'redux';
import thunk from 'react-thunk';

import rooteReducer from './reducers/';

let store = createStore(
    rooteReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
