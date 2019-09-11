/* eslint-disable space-infix-ops */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as ActionType from '../actions/ActionTypes';

/**
 * Actions describe the fact that something happened, but don’t specify how the application’s state (store's state)changes in response. This is the job of reducers.
 * When an action is dispatched for state change in store, its the reducer's duty to make the necessary changes to the state of store 
 * and return the new state of the store.
 * 
 * Whatever actions that are dispatched from the CounterAction will be directed to the CounterReducer for any state updates. 
 * The reducer will have a switch statement which will check for the dispatched action type and execute and update the necessary action type. 
 * 
 */

const CounterReducer = (state={count: 0}, action) =>{
    switch (action.type){
        case ActionType.COUNTER_INCREMENT:
            return Object.assign({},state, {
                count: state.count + 1,
            });
        case ActionType.COUNTER_DECREMENT:
            return Object.assign({}, state, {
                count: state.count -1,
            });
        default:
            return state;
    }
};

export default CounterReducer;
