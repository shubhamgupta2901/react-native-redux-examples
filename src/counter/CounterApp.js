/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet,View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './reducers';
import CounterAction from './actions/CounterAction';


/**
 * Starting point of the application.
 * This will contain the store initialization with the help of the redux Provider.
 * Provider will pass the store to all the available components without individually passing it to each and every component.
 * It will call the counter action which will initialize the necessary actions as well as the UI component.
 */

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <Provider store = {store}>
          <CounterAction/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
});


export default App;
