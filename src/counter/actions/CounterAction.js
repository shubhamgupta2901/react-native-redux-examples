/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import * as ActionTypes from './ActionTypes';
import CounterComponent from '../components/CounterComponent';

/**
 * 
 * Actions are payloads of information that send data from your application to your store. 
 * They are the only source of information for the store.
 * This means that whenever we wish to change the state of store, it must be dispatched through actions.
 * 
 * Actions are plain JavaScript objects. 
 * Actions must have a type property that indicates the type of action being performed.
 * Here we have two type of actions, increment and decrement with thier respective types.
 * When our component CounterComponent will be rendered, it will have access to these actions provided via props by this Higher Order Component.
 * 
 * Similarly our component CounterComponent will also have access to the state of store as props. 
 * This is made possible using mapStateToProps
 * 
 * Note that this is a higher order component of CounterComponent
 * A connect function is called with mapStateToProps and mapDispatchToProps arguments.
 * this connect function retruns another function, to which we pass CounterComponent.
 */
const mapStateToProps = (state) => ({
    count: state.counterReducer.count,
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: ActionTypes.COUNTER_INCREMENT}),
    decrement: () => dispatch({type: ActionTypes.COUNTER_DECREMENT}),
});

export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent);