/* eslint-disable prettier/prettier */
/**
 * Since Redux recommends using a single container for the state management 
 * for future clarifications will combine the reducers to work as one state. 
 * With the help of combineReducers we can merge all the reducers into one state and 
 * return a single store as shown below. This file will combine all the reducers
 * 
 * 
 * With help of reducers a store can be created which holds the entire state of the application.
 * It is recommended to use a single store for the entire application than having multiple stores which will violate the use of redux which only has a single store.
 */

import {combineReducers, createStore} from 'redux';
import counterReducer from './CounterReducer';

const AppReducers = combineReducers({
    counterReducer,
});

const rootReducer = (state, action) =>{
    return AppReducers(state,action);
};

let store = createStore(rootReducer);

export default store;
