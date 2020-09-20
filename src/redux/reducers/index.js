import { combineReducers } from 'redux';

import filterReducer from './filters';
import pizzasReducer from './pizzas';

const rooteReducer = combineReducers({
    filter: filterReducer,
    pizzas: pizzasReducer,
});

export default rooteReducer;
